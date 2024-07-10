import { Boilerplate } from "./index.js";
import Image from "next/image";

export default function Home() {
  return (
    <Boilerplate>
      <div className="grid grid-cols-2 place-items-center gap-4 p-4">
        <div>
          <h1 className="text-7xl font-medium pl-3">Sean Carlson</h1>
  {/*<h3 className="text-3xl text-gray-500 font-medium pl-3">
            Software Engineer
          </h3>*/}
          <p className="p-3 max-w-2xl text-lg">
            I graduated from Northwestern University with a double major
            in computer science and math. I enjoy writing software and find satisfaction
            in paying attention to as much detail as possible when doing so.
          </p>
        </div>
        <div>
          <Image
            className="rounded-full"
            src="/headshot.jpg"
            alt="Photo of Sean"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </Boilerplate>
  );
}
