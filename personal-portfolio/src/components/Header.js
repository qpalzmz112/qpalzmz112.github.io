import HeaderLink from "./HeaderLink.js";
import DropdownList from "./DropdownList.js";

export default function Header() {
  return (
    <header className="bg-sand-green text-black">
      <nav>
        <HeaderLink path="/" text="Home" />
        <HeaderLink path="/experience" text="Experience" />
        <HeaderLink path="/projects" text="Projects" />
        <DropdownList />
      </nav>
    </header>
  );
}
