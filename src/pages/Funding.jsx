import React, { useState } from "react";

export default function Funding() {
  const [fundingData, setFundingData] = useState({
    bookKeeping: "",
    financialLiteracy: "",
    fundingType: "",
    farmingDuration: "",
    fundingPurpose: "",
    numEmployees: "",
    numFemaleEmployees: "",
  });
  const {
    bookKeeping,
    financialLiteracy,
    fundingType,
    farmingDuration,
    fundingPurpose,
    numEmployees,
    numFemaleEmployees,
  } = fundingData;
  function handleSubmit(e) {
    e.preventDefault();
    console.log(fundingData);
  }

  function handleChange(e) {
    setFundingData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <section className="container mx-auto py-8">
        <h1 className="text-center text-3xl mb-8 mt-6 font-bold">
          Funding Questionnaire
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="book-keeping">
              1. Any knowledge on book keeping records? If so, do you have any
              records and for how long have you been doing it?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="book-keeping"
              type="text"
              value={bookKeeping}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="financial-literacy">
              2. Any knowledge on financial literacy?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="financial-literacy"
              type="text"
              value={financialLiteracy}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="funding-type">
              3. What type of funding is needed?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="funding-type"
              type="text"
              value={fundingType}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="funding-duration">
              4. How long have you been farming?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="funding-duration"
              type="text"
              value={farmingDuration}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="funding-purpose">
              5. What is the purpose for the funding?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="funding-purpose"
              type="text"
              value={fundingPurpose}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="numEmployees">
              6. Number of employees working at the farm?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="numEmployees"
              type="text"
              value={numEmployees}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="numFemaleEmployees">
              7. Number of female employees working at the farm?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="numFemaleEmployees"
              type="text"
              value={numFemaleEmployees}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 ">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
