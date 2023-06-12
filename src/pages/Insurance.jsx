import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Insurance() {
  useEffect(() => {
    ScrollReveal().reveal(".content-element", {
      duration: 1000,
      distance: "30px",
      origin: "bottom",
      delay: 200,
      easing: "ease",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".logo-element", {
      duration: 1000,
      distance: "30px",
      origin: "left",
      delay: 200,
      easing: "ease",
    });
  }, []);
  return (
    <section className="bg-[url('https://image1.masterfile.com/getImage/NjExMC0wOTEzNDIzNGVuLjAwMDAwMDAw=AHoRqm/6110-09134234en_Masterfile.jpg')] bg-cover bg-center py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 mt-6 text-center">
          Insurance Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-300 bg-opacity-50 p-4 shadow-md rounded-md">
            <h3 className="text-lg font-bold mb-2">Crop Insurance</h3>
            <img
              src="https://www.madison.co.zm/wp-content/uploads/2018/06/mgen-logo.png"
              alt="Company Logo"
              className="w-22 h-16 mb-4 logo-element"
            />
            <p className="text-sm">
              Policy:{" "}
              <ul className="list-disc px-4 content-element">
                <li>Yield Protection & Revenue Protection coverage options</li>
                <li>Compensation for yield reductions or revenue losses</li>
                <li>
                  Deductibles based on yield guarantee or projected revenue
                </li>
                <li>
                  Flexible premium rates based on crop type and coverage level
                </li>
              </ul>
            </p>
            <p className="text-sm">Payment: Electronic Funds Transfer (EFT)</p>
          </div>
          <div className="bg-yellow-300 bg-opacity-50 p-4 shadow-md rounded-md">
            <h3 className="text-lg font-bold mb-2">Livestock Insurance</h3>
            <img
              src="https://mdh-insurance.co.uk/images/mdh-logo.jpg"
              alt="Company Logo"
              className="w-22 h-16 mb-4 logo-element"
            />
            <p className="text-sm">
              Policy:{" "}
              <ul className="list-disc px-4 content-element">
                <li>Yield Protection & Revenue Protection coverage options</li>
                <li>Compensation for yield reductions or revenue losses</li>
                <li>
                  Deductibles based on yield guarantee or projected revenue
                </li>
                <li>
                  Flexible premium rates based on crop type and coverage level
                </li>
              </ul>
            </p>
            <p className="text-sm">Payment: Electronic Funds Transfer (EFT)</p>
          </div>
          <div className="bg-yellow-300 bg-opacity-50 p-4 shadow-md rounded-md">
            <h3 className="text-lg font-bold mb-2">Farm Equipment Insurance</h3>
            <img
              src="https://www.times.co.zm/wp-content/uploads/2014/04/Professional-Insurance.jpg"
              alt="Company Logo"
              className="w-22 h-16 mb-4 logo-element"
            />
            <p className="text-sm">
              Policy:
              <ul className="list-disc px-4 content-element">
                <li>Yield Protection & Revenue Protection coverage options</li>
                <li>Compensation for yield reductions or revenue losses</li>
                <li>
                  Deductibles based on yield guarantee or projected revenue
                </li>
                <li>
                  Flexible premium rates based on crop type and coverage level
                </li>
              </ul>
            </p>
            <p className="text-sm">Payment: Electronic Funds Transfer (EFT)</p>
          </div>
          <div className="bg-green-300 bg-opacity-50 p-4 shadow-md rounded-md">
            <h3 className="text-lg font-bold mb-2">Agribusiness Insurance</h3>
            <img
              src="https://zambiare.co.zm/wp-content/uploads/2022/09/Zambia-Reinsurance-Logo.jpg"
              alt="Company Logo"
              className="w-22 h-16 mb-4 logo-element"
            />
            <p className="text-sm">
              Policy:{" "}
              <ul className="list-disc px-4 content-element">
                <li>Yield Protection & Revenue Protection coverage options</li>
                <li>Compensation for yield reductions or revenue losses</li>
                <li>
                  Deductibles based on yield guarantee or projected revenue
                </li>
                <li>
                  Flexible premium rates based on crop type and coverage level
                </li>
              </ul>
            </p>
            <p className="text-sm">Payment: Electronic Funds Transfer (EFT)</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <p className="text-2xl font-semibold mt-4 text-center text-green-500">
          Please select the insurance type you're intrested in:
        </p>
        <h2 className="text-3xl font-bold mb-4 text-center text-green-500">
          Registration
        </h2>
        <form className="bg-black bg-opacity-50 p-4 shadow-md rounded-sm">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="phone">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="insurance-type">
              Insurance Type:
            </label>
            <select
              id="insurance-type"
              className="w-full border border-gray-300 rounded-md py-2 px-3">
              <option value="">Select Insurance Type</option>
              <option value="crop-insurance">Crop Insurance</option>
              <option value="farm-equipment-insurance">
                Farm Equipment Insurance
              </option>
              <option value="livestock-insurance">Livestock Insurance</option>
              <option value="agribusiness-insurance">
                Agribusiness Insurance
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
