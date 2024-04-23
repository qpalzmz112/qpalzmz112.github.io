"use client";
import { createContext } from "react";

export const ColorContext = createContext({
  color: "lego-sand-green",
  switchColor: () => {},
});
