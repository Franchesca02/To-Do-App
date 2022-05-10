import React from "react";
import { Link } from "react-router-dom";
// import data from "../data";

const Task2 = (props) => {
  // const id = props.id;
  // const title = props.title;
  // const description = props.description;
  return (
    <div>
      <div className="w-[294px] h-[181px] rounded bg-Green px-4 py-4 mt-2">
        <h2 className="text-2xl font-FontInter text-left text-White">
          Title: {props.title}
        </h2>
        <p className="text-base font-FontInter text-center w-[90%] mx-auto text-Grey py-4">
          <Link to="/To_Do">Description: {props.description}</Link>
        </p>
      </div>
    </div>
  );
};

export default Task2;
