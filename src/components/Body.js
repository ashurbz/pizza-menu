import React from "react";
import PizzaCard from "./PizzaCard";
import { pizzaData } from "../data";

const Body = () => {
  return (
    <div className="bg-slate-400 w-full h-full">
      <div className="text-center py-5">
        <span className="text-5xl text-amber-800 font-bold">
          FAST REACT PIZZA CO.
        </span>
      </div>
      <div className="text-center my-5">
        <span className="border-dotted border-4 border-black border-x-0 p-3 text-3xl font-semibold text-violet-800">
          OUR MENU
        </span>
      </div>
      <div className="text-center py-5 my-5">
        <span>
          Authentic Italion cuisinie & createive dishes to <br /> choose from,
          All from over stove oven, all organic, <br /> all delicious
        </span>
      </div>
      <div>
        <PizzaCard data={pizzaData} />
      </div>
    </div>
  );
};

export default Body;
