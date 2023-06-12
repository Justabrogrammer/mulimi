import React from "react";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    gender: "",
    age: "",
    phoneNumber: "",
    farmLocation: "",
    farmProduce: "",
    objectives: "",
  });
  const {
    firstName,
    lastName,
    email,
    gender,
    age,
    phoneNumber,
    farmLocation,
    farmProduce,
    objectives,
  } = formData;
  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <sectio>
      <h1 className="text-center text-3xl mt-6 font-bold">
        Farmer Registration
      </h1>
      <div>
        <div>
          <form onSubmit={onSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="firstName" className="block font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={onChange}
                className="w-full border-green-400 border-2 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lirstName" className="block font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={onChange}
                className="w-full border-green-400 border-2 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                className="w-full border-green-400 border-2 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-medium mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={onChange}
                className="w-full border-green-400 border-2 p-2 rounded-md">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block font-medium mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={onChange}
                className="w-full border-green-400 border-2 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block font-medium mb-1">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border-r border-green-400">
                  +260
                </span>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onChange}
                  className="w-full border-green-400 border-2 p-2 rounded-r-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="farmLocation" className="block font-medium mb-1">
                Farm Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={farmLocation}
                onChange={onChange}
                className="w-full border-green-400 border-2 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="farmProduce" className="block font-medium mb-1">
                Farm Produce
              </label>
              <input
                type="text"
                id="produce"
                name="produce"
                value={farmProduce}
                onChange={onChange}
                className="w-full border-green-400 border-2 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="objectives" className="block font-medium mb-1">
                Objectives
              </label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id="support"
                    name="support"
                    value={objectives}
                    onChange={onChange}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Support</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    id="insurance"
                    name="insurance"
                    value={objectives}
                    onChange={onChange}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Insurance</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    id="funding"
                    name="funding"
                    value={objectives}
                    onChange={onChange}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Funding</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    id="market"
                    name="market"
                    value={objectives}
                    onChange={onChange}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Market linkage</span>
                </label>
              </div>
            </div>
            <div className="mb-20">
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 ">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </sectio>
  );
}
