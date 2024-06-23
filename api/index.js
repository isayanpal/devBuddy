require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const getUserDetails = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for user ${username}:`, error);
    return null;
  }
};

app.get("/search", async (req, res) => {
  const { location } = req.query;
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=location:${location}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    // res.json(response.data.items);
    const users = response.data.items;

    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const userDetails = await getUserDetails(user.login);
        return {
          ...user,
          followers: userDetails ? userDetails.followers : "N/A",
        };
      })
    );

    res.json(detailedUsers);
  } catch (error) {
    console.log("Error fetching data from Github API:", error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
