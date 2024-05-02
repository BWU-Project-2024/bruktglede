"use client";
import { BliEndelAvPlattformenForm } from "../Forms/BliEndelAvPlattformenForm";
import { useState } from "react";

export const BliEndelCard = ({ tittel, tekst }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {!showForm && (
        <div className="bg-ivory-default w-full md:w-5/6 lg:w-9/12 h-72 lg:h-96 flex flex-col md:flex-row justify-center items-center md:gap-3 lg:gap-5 p-2 px-6 md:px-20 lg:px-20 mx-auto md:mb-10 lg:mb-30 mt-10 lg:mt-20">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="font-jomhuria text-5xl tracking-wide lg:pb-10 text-forestgreen-default">
              {tittel}
            </h3>
            <p className="font-opensans text-forestgreen-default max-w-[90%] text-base lg:text-lg md:mr-6 w-96">{tekst}</p>
          </div>
          <button
            onClick={toggleForm}
            className="mt-4 lg:mt-8 lg:ml-20 md:w-40 lg:w-60 outline  outline-1 p-2 md:p-2 px-4 font-opensans font-semibold rounded-sm outline-forestgreen-default md:px-4 md:outline-1.5 text-forestgreen-default hover:bg-forestgreen-default hover:text-ivory-default transition transition-duration-300"
          >
            Bli endel av plattformen
          </button>
        </div>
      )}

      {showForm && (
        <div className="flex justify-center my-20">
          <BliEndelAvPlattformenForm toggleForm={toggleForm} />
        </div>
      )}
    </>
  );
};