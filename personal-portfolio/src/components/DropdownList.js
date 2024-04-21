"use client";
import Link from "next/link";
import { useState } from "react";

function DropdownListLink(props) {
  return (
    <Link href={props.href} className="block px-5 py-2">
      {props.text}
    </Link>
  );
}

export default function DropdownList() {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
    >
      <button className="inline-block text-2xl px-5 py-2">
        <h1>Hobby Showcases</h1>
      </button>

      {mouseOver ? (
        <div className="absolute inset-x-0 mx-auto w-max rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <DropdownListLink href="/piano" text="Piano" />
          <DropdownListLink href="/lego" text="Custom Lego Builds" />
          <DropdownListLink href="/photography" text="Photography" />
        </div>
      ) : null}
    </div>
  );
}
