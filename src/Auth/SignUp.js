import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../Assets/Google.svg";

const SignUp = () => {
  const { handleSubmit } = useForm();

  return (
    <div className="py-6">
      <div className="w-[80%] mx-auto bg-grey-500 text-center">
        <form onSubmit={handleSubmit}>
          <h1 className="font-FontInter text-[34px] my-10">Sign Up</h1>

          <div>
            <input
              className="w-[326px] h-[54px] rounded border-grey border-2 px-6"
              type="text"
              placeholder="Name"
              autoComplete="true"
            />
          </div>
          <div className="mt-4">
            <input
              className="w-[326px] h-[54px] rounded border-grey border-2 px-6"
              type="email"
              placeholder="Email"
              required="required"
            />
          </div>

          <div className="mt-4">
            <input
              className="w-[326px] h-[54px] rounded border-grey border-2 px-6"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mt-6">
            <button className="w-[328px] h-[36px] bg-backgroundDark text-White rounded">
              Login
            </button>
          </div>
          <p className="mt-4 font-FontInter text-Grey text-sm">Or</p>
          <div className="mt-6 ">
            <div className="flex w-[327px] h-[56px] rounded border-grey border-2 px-6 mx-auto py-2">
              <img src={Logo} alt="A google icon" />
              <input
                className="border-none ml-6 outline-0 bg-Gray"
                placeholder="Sign in with Google"
              />
            </div>
          </div>
          <p>
            Already have an account?{" "}
            <span className="text-Wine text-sm italic">
              <Link to="/Login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
