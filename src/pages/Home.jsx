import React, { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Home = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1533062618053-d51e617307ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Insurance",
      content:
        "Get your farm, Agrobusiness, Equipments or Livestock insured and be a happy free farmer",
      buttonText: "Get started",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Market Place",
      content: "Sell or Buy fresh farm produce straight from the farm",
      buttonText: "Get started",
    },
    {
      image:
        "https://venturesafrica.com/wp-content/uploads/2022/07/Sect2_AGRICULTURE-AND-FOOD_HiRes-32-1200x753_auto_x2.jpg",
      title: "Mulimi Support",
      content:
        "Get Financial literancy, Contract Management, Input Registry, and Agronomy services",
      buttonText: "Get started",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="w-4/5 mx-auto h-80 relative mt-9 mb-9 border-2 border-yellow-500 rounded-3xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-full w-full absolute top-0 left-0 transition-opacity duration-500 rounded-3xl ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "22px",
            }}>
            <div className="absolute inset-0 flex flex-col items-start justify-end px-28 py-9 rounded-3xl">
              <h1 className="text-white text-3xl font-bold">{slide.title}</h1>
              <p className="text-white">{slide.content}</p>
              <button className="bg-transparent border-2 border-green-400 cursor-pointer text-white px-4 py-2 mt-4 rounded z-500">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
        <div
          className="absolute inset-0 flex items-center justify-end"
          onClick={prevSlide}>
          <button className="text-white text-4xl">
            <IoIosArrowDropright />
          </button>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-start rounded-3xl"
          onClick={nextSlide}>
          <button className="text-white text-4xl cursor-pointer z-10">
            <IoIosArrowDropleft />
          </button>
        </div>
      </div>
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-green-900 font-bold mb-8">
            What Mulimi Offers You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Funding</h3>
              <p>Get access to funding for your agricultural projects.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Insurance</h3>
              <p>
                Protect your crops and livestock with comprehensive insurance
                coverage.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Mulimi Support</h3>
              <p>Receive guidance and assistance from Mulimi experts.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-4">Marketplace</h3>
              <p>
                Connect with buyers and sellers in the agricultural marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
