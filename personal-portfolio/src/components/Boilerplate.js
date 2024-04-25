"use client";
import { ColorContext } from "../app/index.js";
import { useContext, useState, useLayoutEffect } from "react";
import Header from "./Header.js";

export default function Boilerplate({ children }) {
  let { color } = useContext(ColorContext);

  const [colorState, setColorState] = useState(color);
  const switchColor = (col) => setColorState(col);

  useLayoutEffect(() => {
    let col = JSON.parse(localStorage.getItem("color"));
    if (col) {
      setColorState(col);
    }
  }, []);

  let colors = {
    "lego-sand-green": "to-lego-sand-green",
    "lego-sand-blue": "to-lego-sand-blue",
    "lego-sand-red": "to-lego-sand-red",
  };

  return (
    <main
      className={`bg-gradient-to-t from-white ${colors[colorState]} absolute min-h-screen w-screen font-playfair text-black`}
    >
      <ColorContext.Provider
        value={{ color: colorState, switchColor: switchColor }}
      >
        <Header />
        {children}
      </ColorContext.Provider>
    </main>
  );
}
