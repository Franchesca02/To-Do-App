import React from "react";

const Card = (props) => {
  // const id = props.id;
  // const title = props.title;
  // const description = props.description;
  //   const data = data.find((d) => d._id === id);
  //   const { id } = useParams();
  return (
    <div>
      <div className="w-[294px] h-[181px] rounded bg-Yellow px-4 py-4 mt-2">
        <h2 className="text-2xl font-FontInter text-left text-White">
          Title: {props.title}
        </h2>
        <p className="text-base font-FontInter text-center w-[90%] mx-auto text-Grey py-4">
          Description: {props.description}
        </p>
        {/* {data === {}
          ? "LOADING"
          : data && data.Search?.map((data) => <h3>Title: {data.title}</h3>)} */}
      </div>
    </div>
  );
};

export default Card;
