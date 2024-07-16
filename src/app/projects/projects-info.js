class Project {
  constructor({
    title,
    year,
    desc,
    link1 = null,
    link1Text = null,
    link2 = null,
    link2Text = null,
    baseIconPath,
    iconNames,
  }) {
    this.title = title;
    this.year = year;
    this.desc = desc;
    this.link1 = link1;
    this.link1Text = link1Text;
    this.link2 = link2;
    this.link2Text = link2Text;
    this.baseIconPath = baseIconPath;
    this.iconNames = iconNames;
  }
}

// projects is exported
let projects = [
  new Project({
    title: "Kitchen Tracker",
    year: "2024",
    desc: "Kitchen Tracker is an app I made with React Native and Expo, styled with Nativewind. It offers three interconnected lists: shopping list, ingredients, and recipes, and has customizable reminders for food that is going to expire.",
    baseIconPath: "/project-icons/kitchen-tracker/",
    iconNames: ["react-native.png", "expo.png"],
    link1:
      "https://play.google.com/store/apps/details?id=com.qpalzm112.PantryManager&pli=1",
    link1Text: "Play Store Listing",
  }),
  new Project({
    title: "Star Collector",
    year: "2024",
    desc: "Star Collector is a Unity game I made with two other students for CS 377: Game Development Studio. The game is a space-themed platformer with various mechanics in each level.",
    link1: "https://www.youtube.com/watch?v=E7xTLBr6sf0",
    link1Text: "Gameplay Video",
    baseIconPath: "/project-icons/star-collector/",
    iconNames: ["star.png", "unity.png"],
  }),
  new Project({
    title: "Budget App",
    year: "2023",
    desc: "For CS 310: Scalable Software Architectures, I developed a budget app with a partner. The app's backend uses multiple AWS offerings: Lambda functions, an RDS SQL database, and API gateway.",
    baseIconPath: "/project-icons/",
    iconNames: ["aws.png"],
  }),
  new Project({
    title: "Robot Evolution Simulator",
    year: "2023",
    desc: "For CS 396: Artificial Life, I used Python to develop an algorithm to randomly generate and evolve robot bodies in a simulator. Then, I tested whether the number of parts in a robot's body correlates with how far the robot moves.",
    link1: "https://www.youtube.com/watch?v=Fd9Me8a20es&feature=youtu.be",
    link1Text: "Video Summary",
    link2:
      "https://github.com/qpalzmz112/Robot-Evolution-Simulator/tree/finalProject",
    link2Text: "Github Link",
    baseIconPath: "/project-icons/",
    iconNames: ["python.jpg"],
  }),
  new Project({
    title: "Approximation Algorithm Comparison",
    year: "2023",
    desc: "For CS 396: Approximation Algorithms, I implemented a well-known approximation algorithm to solve the bin packing problem. Then, I tested four bin selection methods and reported my findings.",
    link1:
      "https://docs.google.com/document/d/1GPSw4bNUiAvlbyrkp29Cs_SbApV0smid0N7VmQYKVoU/edit",
    link1Text: "Write Up",
    baseIconPath: "/project-icons/",
    iconNames: ["algorithm.png"],
  }),
  new Project({
    title: "Tock OS: Micro:Bit Test App",
    year: "2022",
    desc: "Tock is a Rust-based operating system designed for embedded systems. I met weekly with Professor Ghena, a founder of Tock, to learn about Tock and embedded systems so that I could develop a test app. The app gives users an easy way to check that the C library of Tock system calls is working correctly on the Micro:bit and provides example code for all of the library's functions that are supported on the Micro:bit.",
    link1: "https://tockos.org/",
    link1Text: "Tock",
    link2:
      "https://github.com/qpalzmz112/libtock-c/tree/master/examples/tests/microbit_v2",
    link2Text: "Test App",
    baseIconPath: "/project-icons/microbit/",
    iconNames: ["tock.png"],
  }),
  new Project({
    title: "Google Chrome Spanish Characters Extension",
    year: "2021",
    desc: "When I was taking Spanish courses, my typing was slowed by having to copy and paste accented letters from the internet. so I made this extension to speed up this process. Now, the extension has over 15,000 weekly users and a 5 star review calling it a lifesaver.",
    link1:
      "https://chromewebstore.google.com/detail/spanish-characters-extens/oenjbnfmpdgkbijmdddcdkofhhbonmeb?hl=en&authuser=0&pli=1",
    link1Text: "Chrome Web Store Link",
    baseIconPath: "/project-icons/",
    iconNames: ["chrome.jpg"],
  }),
  new Project({
    title: "Google Chrome Wish List Extension",
    year: "2021",
    desc: "I made the Wish List Extension because I found it tedious to keep track of many store-specific wishlists on different apps and sites. My extension offers a central location to keep track of wanted items.",
    link1:
      "https://chromewebstore.google.com/detail/wish-list-extension/hgaaaecbidkmoabjcobdnfaiojpopohk?hl=en&authuser=0",
    link1Text: "Chrome Web Store Link",
    baseIconPath: "/project-icons/",
    iconNames: ["chrome.jpg"],
  }),
];

export default projects;
