import React from "react";
import { motion } from "framer-motion";

function ProfileCard({ title, url, avatar, followerCount }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-full max-w-sm bg-white border border-[#30d545] rounded-3xl shadow dark:bg-gray-800 dark:border-[#30d545]"
    >
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={avatar}
          alt="profile image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          {followerCount} Followers
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href={url}
            target="__blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#30d545] rounded-xl "
          >
            Connect
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileCard;
