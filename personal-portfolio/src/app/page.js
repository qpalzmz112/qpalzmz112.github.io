import { Boilerplate } from "./index.js";
import Image from "next/image";

export default function Home() {
  return (
    <Boilerplate>
      <div className="h-max flex justify-center">
        <div className="pt-40 pr-24">
          <h1 className="text-7xl font-medium pl-3 pt-1">Sean Carlson</h1>
          <h3 className="text-3xl text-gray-500 font-medium pl-3">
            Software Engineer
          </h3>
          <p className="p-3 max-w-2xl text-lg">
            I'm graduating from Northwestern University with a double major in
            computer science and math. I love writing software, and find
            satisfaction in paying attention to even the tiniest details to make
            the best user experience possible.
          </p>
        </div>
        <div className="pt-20">
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
