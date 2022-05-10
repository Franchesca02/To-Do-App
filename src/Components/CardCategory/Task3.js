import React from "react";

const Task3 = (props) => {
  return (
    <div>
      <div className="w-[294px] h-[181px] rounded bg-Red px-4 py-4 mt-2">
        <h2 className="text-2xl font-FontInter text-left text-White">
          Title: {props.title}
        </h2>
        <p className="text-base font-FontInter text-center w-[90%] mx-auto text-Grey py-4">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Task3;
