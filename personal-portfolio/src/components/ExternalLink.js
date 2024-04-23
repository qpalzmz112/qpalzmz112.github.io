"use client";
import Link from "next/link";
import { ColorContext } from "../app/index.js";
import { useContext } from "react";

export default function ExternalLink(props) {
  const { color } = useContext(ColorContext);
  const linkColors = {
    "lego-sand-green": ["text-lego-sand-green", "hover:text-lego-green"],
    "lego-sand-blue": ["text-lego-sand-blue", "hover:text-lego-dark-azure"],
    "lego-sand-red": ["text-lego-sand-red", "hover:text-lego-dark-red"],
  };
  return (
    <Link
      className={`${linkColors[color][0]} block underline ${linkColors[color][1]} ${props.className}`}
      href={props.href}
      target="_blank"
    >
      {props.text}
    </Link>
  );
}
