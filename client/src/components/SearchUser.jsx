import React, { useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "./loader/Loader";

function SearchUser() {
  const [location, setLocation] = useState("");

  const searchUsers = async () => {
    const res = await axios.get(
      `https://devbuddy.onrender.com/search?location=${location}`
    );
    return res.data;
  };

  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["profileData", location],
    queryFn: searchUsers,
    enabled: false, // Don't run automatically
  });

  if (isLoading) {
    return (
      <span>
        <Loader />
      </span>
    );
  }

  if (error)
    return (
      <span className="text-white">An error has occurred: {error.message}</span>
    );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 mt-3 self-center">
        <input
          className="w-[200px] p-3 outline-[#30d545] outline rounded-xl"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
        <button
          className="bg-[#30d545] px-5 rounded-3xl text-white font-semibold"
          onClick={() => refetch()}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-2">
        {users &&
          users
            .slice(0, 12)
            .map((user, index) => (
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
