import Link from "next/link";
import HeaderLink from "./HeaderLink.js";
import DropdownList from "./DropdownList.js";
import ColorButton from "./ColorButton.js";
import { useContext } from "react";
import { ColorContext } from "../app/index.js";

export default function Header() {
  const { color } = useContext(ColorContext);

  return (
    <header
      className={`sticky top-0 bg-${color} text-black border-b-2 border-gray-300 z-10`}
    >
      <nav>
        <HeaderLink path="/" text="Home" />
        <HeaderLink path="/experience" text="Experience" />
        <HeaderLink path="/projects" text="Projects" />
        <DropdownList />
        <ColorButton />
        <Link
          className="float-right text-3xl pt-1 pr-4 hover:text-gray-500"
          href="mailto:seancarlson112@gmail.com"
        >
          ✉
        </Link>
      </nav>
    </header>
  );
}
