import Link from "next/link";
import HeaderLink from "./HeaderLink.js";
import DropdownList from "./DropdownList.js";

export default function Header() {
  return (
    <header className={`sticky top-0 bg-sand-green text-black`}>
      <nav>
        <HeaderLink path="/" text="Home" />
        <HeaderLink path="/experience" text="Experience" />
        <HeaderLink path="/projects" text="Projects" />
        <DropdownList />
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
