"use client";
import Link from "next/link";
import { ColorContext, Colors } from "../app/index.js";
import { useContext } from "react";

export default function ExternalLink(props) {
  const { color } = useContext(ColorContext);

  return (
    <Link
      className={`text-${color} block underline hover:text-${Colors[color]} ${props.className}`}
      href={props.href}
      target="_blank"
    >
      {props.text}
    </Link>
  );
}
