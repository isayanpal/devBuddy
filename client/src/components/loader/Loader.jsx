import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <span className="loader-text">Loading</span>
      <span className="load"></span>
    </div>
  );
};

export default Loader;
