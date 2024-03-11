import React from "react";

const PizzaCard = ({ data }) => {
  return (
    <div className="flex">
      {data.map((item) => {
        return (
          <div
            key={item.name}
            className={` ${
              item.soldOut ? "bg-red-500" : ""
            } border border-stone-800 w-1/3 p-5 m-2 justify-between`}
          >
            <div className="w-1/2">
              <img className="rounded-2xl" src={item.photoName} alt="foca" />
            </div>
            <div className="p-3">
              <div className="font-bold font-serif">{item.name}</div>
              <div>{item.ingredients}</div>
              <div>{item.soldOut ? "Sold Out" : item.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PizzaCard;
