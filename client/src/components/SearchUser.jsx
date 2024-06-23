import React, { useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

function SearchUser() {
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);

  const searchUsers = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/search?location=${location}`
      );
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };
  return (
    <div className="flex flex-col gap-5 ">
      {/* search div */}
      <div className="flex flex-row gap-5 mt-3">
        <input
          className="w-[200px] p-3 outline-[#30d545] outline rounded-xl"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
        <button
          className="bg-[#30d545] px-5 rounded-3xl text-white font-semibold"
          onClick={searchUsers}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-2">
        {users.slice(0, 12).map((user, index) => (
          <ProfileCard
            key={index}
            title={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
            followerCount={user.followers}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchUser;
