import React from "react";

export default function Support() {
  const services = [
    {
      id: 1,
      name: "Input registry and disbursement",
      description:
        "Get expert advice on soil management, crop rotation, pest and disease management, and more.",
      price: "ZMW1999",
      imageSrc:
        "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
      id: 2,
      name: "Contract Management",
      description:
        "Learn about budgeting, saving, investing, and more to help you manage your finances effectively.",
      price: "ZMW2499",
      imageSrc:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    },
    {
      id: 3,
      name: "Agronomy services",
      description:
        "Learn about budgeting, saving, investing, and more to help you manage your finances effectively.",
      price: "ZMW2999",
      imageSrc:
        "https://images.unsplash.com/photo-1631401551847-78450ef649d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 4,
      name: "Financial literacy training courses",
      description:
        "Learn about budgeting, saving, investing, and more to help you manage your finances effectively.",
      price: "ZMW233",
      imageSrc:
        "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const handleSubscribe = (service) => {
    // handle subscription logic here
    console.log(`Subscribed to ${service.name}`);
  };

  return (
    <section>
      <h1 className="text-center text-3xl mb-14 mt-16 font-bold">
        Support from Mulimi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-56 object-cover"
              src={service.imageSrc}
              alt={service.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{service.name}</div>
              <p className="text-gray-700 text-base">{service.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {service.price}
              </span>
              <button
                onClick={() => handleSubscribe(service)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Subscribe to all services
        </button>
      </div>
    </section>
  );
}
