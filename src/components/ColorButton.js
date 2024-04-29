"use client";
import { ColorContext } from "../app/index.js";
import { useContext, useState } from "react";

let colors = {
  "lego-sand-green": "bg-lego-sand-green",
  "lego-sand-blue": "bg-lego-sand-blue",
  "lego-sand-red": "bg-lego-sand-red",
};

function Color({ color }) {
  const { switchColor } = useContext(ColorContext);
  const fun = () => {
    switchColor(color);
    localStorage.setItem("color", JSON.stringify(color));
  };
  return (
    <div
      onClick={fun}
      className={`${colors[color]} h-16 w-16 rounded-full m-1`}
    />
  );
}

export default function ColorButton() {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className={`grid place-items-center absolute rounded-full ${
        mouseOver ? "bg-gray-200" : ""
      } right-14 top-2 inline-block hover:cursor-pointer`}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
    >
      <img
        src={mouseOver ? "/paint-bucket-hover.svg" : "/paint-bucket.svg"}
        width="25"
        height="25"
        className="m-1"
      />

      <div
        onMouseEnter={() => {
          setMouseOver(true);
        }}
        className="absolute top-0 w-8 h-8"
      >
        &nbsp;
      </div>

      <div
        className={`${mouseOver ? "visible" : "collapse"} focus:outline-none`}
      >
        {Object.keys(colors).map((color) => (
          <Color key={color} color={color} />
        ))}
      </div>
    </div>
  );
}
