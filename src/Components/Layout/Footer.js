import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between items-center bg-Grey px-8 h-[150px]">
      <div>
        <p>2022 To-Do-List App. All Rights Reserved</p>
      </div>
      <div>
        <Link to="#">Terms of Service</Link>
      </div>
      <div>
        <Link to="#">Services</Link>
      </div>
      <div>
        <Link to="#">About</Link>
      </div>
      <div>
        <Link to="#">Blog</Link>
      </div>
    </div>
  );
};

export default Footer;
