import { Header, ExperienceTab } from "../index.js";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-white to-sand-green absolute h-screen w-screen font-playfair text-black">
      <Header />
      <div className="grid grid-cols-2 gap-4 p-4">
        <ExperienceTab
          title="Xenobot Lab"
          position="Software Development Intern"
          dateRange="04/2023-08/2023"
          description="With Xenobot Lab, I developedText2Lego: a Python program that converts images to buildable Lego designs. Text2Lego uses the Python module Pillow for image processing and uses the physics simulator MuJoCo to simulate the Lego designs for testing."
          link1="https://www.xenobot.group/"
          link1Text="Xenobot Lab"
          link2="https://github.com/qpalzmz112/Text2Lego"
          link2Text="Github Link"
        />
        <ExperienceTab
          title="Northwestern Lab for Internet and Security Technology (LIST)"
          position="Cloud-Native Security Project Intern"
          dateRange="06/2022-09/2022"
          description="At LIST, my responsibilities included using Go and the Elasticsearch API to write a data-querying script and modifying an open source program to run in a container."
        />
      </div>
    </main>
  );
}
