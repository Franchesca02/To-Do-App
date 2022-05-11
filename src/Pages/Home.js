import React from "react";
import Banner from "../Assets/Banner.webp";
import Card from "../Components/CardCategory/Task1";
import Task2 from "../Components/CardCategory/Task2";
import Task3 from "../Components/CardCategory/Task3";
import Task4 from "../Components/CardCategory/Task4";

const Home = () => {
  return (
    <div className="">
      <div className="w-full h-5/6">
        <img src={Banner} alt="Banner icon" />
      </div>
      <div className="absolute top-[430px] ml-6">
        <h1 className="text-4xl font-FontInter font-bold px-4">
          Welcome to My To-Do-List Page
        </h1>
        <p className="text-xl font-FontInter font-bold text-Red px-6 py-2">
          You can create, edit and delete your tasks
        </p>
      </div>
      <h1 className="text-4xl font-FontInter font-bold text-[#969696] underline mx-6 my-8">
        Task Categories
      </h1>
      <p className="text-2xl font-FotInter font-bold mx-6 py-2 italic ml-16">
        By Projects
      </p>
      <div className="ml-10">
        <div className="flex flex-wrap justify-between w-[95%] mx-auto py-2">
          <Card
            title="Web Development"
            description="To translate into code a well designed Figma UI for a client for the web."
          />
          <Task2
            title="Mobile Application"
            description="To translate into code a well designed Figma UI for a client for mobile usage."
          />
          <Task3
            title="Digital Marketing"
            description="To Market our products to Fifteen companies before the close of business on Monday"
          />
          <Task4
            title="Cyber Security"
            description="To ensure a strong data protection and security architecture of our company."
          />
        </div>

        <p className="text-2xl font-FotInter font-bold mx-6 py-2 italic">
          By Priority
        </p>
        <div className="flex flex-wrap justify-between w-[95%] mx-auto py-2">
          <Card
            title="High Priority"
            description="To finish up this task on or before the deadline."
          />
          <Task2
            title="Medium Priority"
            description="To finish up this task on or before the deadline."
          />
          <Task3
            title="Low Priority"
            description="To finish up this task on or before the deadline."
          />
          <Task4
            title="Pending Tasks"
            description="To finish up this task on or before the deadline."
          />
        </div>

        <p className="text-2xl font-FotInter font-bold mx-6 py-2 italic">
          By Task Type
        </p>
        <div className="flex flex-wrap justify-between w-[95%] mx-auto py-2">
          <Card
            title="Social Media"
            description="To finish up this task on or before the deadline."
          />
          <Task2
            title="Research"
            description="To finish up this task on or before the deadline."
          />
          <Task3
            title="Data Collection"
            description="To finish up this task on or before the deadline."
          />
          <Task4
            title="Data Analysis"
            description="To finish up this task on or before the deadline."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
