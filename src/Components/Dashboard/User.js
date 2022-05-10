import React from "react";
import { Link } from "react-router-dom";
import Calendar from "../../Assets/calendar.png";

const To_Do = () => {
  return (
    <div className="flex flex-wrap py-8">
      <div className="w-[80%] mx-auto">
        <div className="grid mt-4">
          <p className="font-FontInter font-medium ml-4 mt-2 text-xl text-Red">
            Michael Idowu
          </p>
          <p className="font-FontInter font-medium ml-4 mt-2 text-base text-[#969696] italic">
            User
          </p>
        </div>
        <form>
          <div className="shadow-md py-4 px-4">
            <h4 className="text-base font-bold font-FontInter text-Red mt-4">
              New To_do List
            </h4>
            <div className="flex mt-6">
              <input
                type="text"
                placeholder="New tasks"
                autoComplete="true"
                className="w-[350px] h-[40px] outline-none border-2 border-Grey rounded bg-bodyBg font-FontInter px-4"
              />
              <button className="w-[50px] h-[40px] rounded-lg font-FontInter text-sm bg-Green text-White ml-4">
                Add
              </button>
              <button className="w-[50px] h-[40px] rounded-lg font-FontInter text-base bg-Red text-White ml-4">
                Del
              </button>
            </div>
          </div>
        </form>

        <select className="text-base text-Green font-FontInter font-bold mx-6 py-2 mt-2 bg-Gray">
          <option>Projects</option>
          <option>Project 1</option>
          <option>Project 2</option>
          <option>Project 3</option>
        </select>
        <form>
          <div className="shadow-md py-4 px-4">
            <div className="flex mt-6 flex-wrap justify-between">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-Grey rounded-full bg-bodyBg font-FontInter ml-2 mt-2"
              />
              <p className="text-base font-bold font-FontInter mt-2 px-2">
                This is the first project
              </p>

              <Link
                to="#"
                className="text-[#969696] font-bold Font-FontInter underline mt-2 px-2"
              >
                Edit
              </Link>
              <Link
                to="#"
                className="text-Red font-bold Font-FontInter underline mt-2 px-2"
              >
                Del
              </Link>
              <div className="flex mt-2 px-2">
                <img src={Calendar} alt="Calendar" />
                <p className="text-[#969696] text-sm font-FontInter px-2">
                  Mon May, 09
                </p>
              </div>
            </div>
          </div>
        </form>

        <form>
          <div className="shadow-md py-4 px-4">
            <div className="flex mt-6 flex-wrap justify-between">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-Grey rounded-full bg-bodyBg font-FontInter ml-2 mt-2"
              />
              <p className="text-base font-bold font-FontInter mt-2 px-2">
                This is the Second project
              </p>

              <Link
                to="#"
                className="text-[#969696] font-bold Font-FontInter underline mt-2 px-2"
              >
                Edit
              </Link>
              <Link
                to="#"
                className="text-Red font-bold Font-FontInter underline mt-2 px-2"
              >
                Del
              </Link>
              <div className="flex mt-2 px-2">
                <img src={Calendar} alt="Calendar" />
                <p className="text-[#969696] text-sm font-FontInter px-2">
                  Mon May, 09
                </p>
              </div>
            </div>
          </div>
        </form>
        <select className="text-base text-Red font-FontInter font-bold mx-6 py-2 mt-4 bg-Gray">
          <option>Priorities</option>
          <option>High project</option>
          <option>Medium project</option>
          <option> Low project</option>
        </select>
        <form>
          <div className="shadow-md py-4 px-4">
            <div className="flex mt-6 flex-wrap justify-between">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-Grey bg-bodyBg font-FontInter ml-2 mt-2"
              />
              <p className="text-base font-bold font-FontInter mt-2 px-2">
                This is of a high priority
              </p>

              <Link
                to="#"
                className="text-[#969696] font-bold Font-FontInter underline mt-2 px-2"
              >
                Edit
              </Link>
              <Link
                to="#"
                className="text-Red font-bold Font-FontInter underline mt-2 px-2"
              >
                Del
              </Link>
              <div className="flex mt-2 px-2">
                <img src={Calendar} alt="Calendar" />
                <p className="text-[#969696] text-sm font-FontInter px-2">
                  Mon May, 09
                </p>
              </div>
            </div>
          </div>
        </form>

        <form>
          <div className="shadow-md py-4 px-4">
            <div className="flex mt-6 flex-wrap justify-between">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-Grey rounded-full bg-bodyBg font-FontInter ml-2 mt-2"
              />
              <p className="text-base font-bold font-FontInter mt-2 px-2">
                This is of a medium priority
              </p>

              <Link
                to="#"
                className="text-[#969696] font-bold Font-FontInter underline mt-2 px-2"
              >
                Edit
              </Link>
              <Link
                to="#"
                className="text-Red font-bold Font-FontInter underline mt-2 px-2"
              >
                Del
              </Link>
              <div className="flex mt-2 px-2">
                <img src={Calendar} alt="Calendar" />
                <p className="text-[#969696] text-sm font-FontInter px-2">
                  Mon May, 09
                </p>
              </div>
            </div>
          </div>
        </form>

        <select className="text-base text-Yellow font-FontInter font-bold mx-6 py-2 mt-4 bg-Gray">
          <option>Task types</option>
          <option>Social media</option>
          <option>Research</option>
          <option>Tech</option>
        </select>

        <form>
          <div className="shadow-md py-4 px-4">
            <div className="flex mt-6 flex-wrap justify-between">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-Grey rounded-full bg-bodyBg font-FontInter ml-2 mt-2"
              />
              <p className="text-base font-bold font-FontInter mt-2 px-2">
                Research methodology
              </p>

              <Link
                to="#"
                className="text-[#969696] font-bold Font-FontInter underline mt-2 px-2"
              >
                Edit
              </Link>
              <Link
                to="#"
                className="text-Red font-bold Font-FontInter underline mt-2 px-2"
              >
                Del
              </Link>
              <div className="flex mt-2 px-2">
                <img src={Calendar} alt="Calendar" />
                <p className="text-[#969696] text-sm font-FontInter px-2">
                  Mon May, 09
                </p>
              </div>
            </div>
          </div>
        </form>

        <form>
          <div className="shadow-md py-4 px-4">
            <div className="flex mt-6 flex-wrap justify-between">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-full border-Grey rounded-full bg-bodyBg font-FontInter ml-2 mt-2"
              />
              <p className="text-base font-bold font-FontInter mt-2 px-2">
                Web development
              </p>

              <Link
                to="#"
                className="text-[#969696] font-bold Font-FontInter underline mt-2 px-2"
              >
                Edit
              </Link>
              <Link
                to="#"
                className="text-Red font-bold Font-FontInter underline mt-2 px-2"
              >
                Del
              </Link>
              <div className="flex mt-2 px-2">
                <img src={Calendar} alt="Calendar" />
                <p className="text-[#969696] text-sm font-FontInter px-2">
                  Mon May, 09
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default To_Do;
