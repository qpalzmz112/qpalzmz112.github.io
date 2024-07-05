class Experience {
  constructor({
    title,
    position,
    dateRange,
    desc,
    link1 = null,
    link1Text = null,
    link2 = null,
    link2Text = null,
    baseIconPath,
    iconNames,
  }) {
    this.title = title;
    this.position = position;
    this.dateRange = dateRange;
    this.desc = desc;
    this.link1 = link1;
    this.link1Text = link1Text;
    this.link2 = link2;
    this.link2Text = link2Text;
    this.baseIconPath = baseIconPath;
    this.iconNames = iconNames;
  }
}

// experiences is exported
let experiences = [
  new Experience({
    title: "Xenobot Lab",
    position: "Software Development Intern",
    dateRange: "04/2023-08/2023",
    desc: "With Xenobot Lab, I developedText2Lego: a Python program that converts images to buildable Lego designs. Text2Lego uses the Python module Pillow for image processing and uses the physics simulator MuJoCo to simulate the Lego designs for testing.",
    link1: "https://www.xenobot.group/",
    link1Text: "Xenobot Lab",
    link2: "https://github.com/qpalzmz112/Text2Lego",
    link2Text: "Github Link",
    baseIconPath: "/experience-icons/",
    iconNames: ["pillow.jpg"],
  }),
  new Experience({
    title: "Northwestern University",
    position: "Calculus Study Group Leader",
    dateRange: "09/2022-06/2023",
    desc: "Each quarter of my junior year, I led a weekly study group for students taking multivariable calculus.",
    baseIconPath: "/experience-icons/",
    iconNames: ["calculus.png"],
  }),
  new Experience({
    title: "Northwestern Lab for Internet and Security Technology (LIST)",
    position: "Cloud-Native Security Project Intern",
    dateRange: "06/2022-09/2022",
    desc: "At LIST, my responsibilities included using Go and the Elasticsearch API to write a data-querying script and modifying an open source program to run in a container.",
    baseIconPath: "/experience-icons/",
    iconNames: ["elastic.png", "docker.png"],
  }),
];

export default experiences;
