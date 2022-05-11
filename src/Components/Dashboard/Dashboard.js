import React from "react";
import HomeIcon from "../../Assets/home.png";
import Dash from "../../Assets/dash.png";
import Task from "../../Assets/task.png";
import Settings from "../../Assets/setting.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-[250px] h-[380px] bg-Grey py-4 text-center rounded ml-12">
      <h1 className="font-bold font-FontInter text-2xl py-2">Dashboard</h1>
      <div className="grid px-14">
        <div className="flex mt-8">
          <img src={HomeIcon} alt="home icon" />
          <p className="text-base font-bold font-FontInter text-Red px-4">
            <Link to="/">Home</Link>
          </p>
        </div>
        <div className="mt-8">
          <Link to="/User">
            <button className=" flex text-base font-bold font-FontInter text-Red rounded-lg w-[170px] h-[48px] py-2 px-2 bg-Gray">
              <img src={Dash} alt="home icon" />
              <p className="px-2">User dashboard</p>
            </button>
          </Link>
        </div>
        <div className="flex mt-8">
          <img src={Task} alt="home icon" />
          <p className="text-base font-bold font-FontInter text-Red px-4">
            <Link to="/To_do">Task</Link>
          </p>
        </div>
        <div className="flex mt-8">
          <img src={Settings} alt="home icon" />
          <p className="text-base font-bold font-FontInter text-Red px-4">
            <Link to="/">Settings</Link>
          </p>
        </div>
      </div>
      <h3 className="font-bold font-FontInter text-base py-8 text-White underline">
        <Link to="#">Logout</Link>
      </h3>
    </div>
  );
};

export default Dashboard;
