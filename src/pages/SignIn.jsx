import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  function handlerRegister() {
    navigate("/register");
  }
  async function onSubmit(e) {
    e.preventDefault();
    // Check if the provided email and password match the hardcoded logins
    if (email === "user@example.com" && password === "12345678") {
      // Successful sign-in, navigate to home
      navigate("/");
    } else {
      toast.error("Wrong Email or Password!");
      console.log("Invalid credentials");
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://scontent.fhre1-1.fna.fbcdn.net/v/t39.30808-6/347811728_914756802931874_3774360200504015986_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=GAhzH-7Evm4AX9DopaQ&_nc_ht=scontent.fhre1-1.fna&oh=00_AfCRObFtd75PI-j1RpsiVdxLPy-6VawPcUNBgIzXOjJ7GQ&oe=6489B332"
            alt="farmer"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-green-500 border-2 rounded transition eae-in-out"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-green-500 border-2 rounded transition eae-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                  Forgot password
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg">
              Sign In
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <div className="mt-4">
              <button
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handlerRegister}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
