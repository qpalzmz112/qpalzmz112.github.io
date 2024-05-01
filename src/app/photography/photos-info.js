class PhotoSet {
  constructor({ title, location, date = null, basePath, imgNames }) {
    this.title = title;
    this.location = location;
    this.date = date;
    this.basePath = basePath;
    this.imgNames = imgNames;
  }
}

// photoSets is exported
let photoSets = {
  Como: new PhotoSet({
    title: "Como Conservatory and Zoo",
    location: "St. Paul, MN",
    date: "4/29/2023",
    basePath: "/photography-page/como-april-2023/",
    imgNames: [
      "green-orange-leaves.jpg",
      "orange-black-plant.jpg",
      "yellow-bird.jpg",
    ],
  }),
  Garfield: new PhotoSet({
    title: "Garfield Park Conservatory",
    location: "Indianapolis, IN",
    date: "3/21/2023",
    basePath: "/photography-page/garfield/",
    imgNames: [
      "buddha-belly.jpg",
      "orange-flame-justica.jpg",
      "pink-plant.jpg",
      "powder-puff-tree.jpg",
    ],
  }),
  Pond: new PhotoSet({
    title: "Blue Pond",
    location: "Golconda, IL",
    date: "3/24/2023",
    basePath: "/photography-page/pond/",
    imgNames: ["blue-pond.jpg"],
  }),
  Colorado: new PhotoSet({
    title: "Colorado Mountains",
    location: "Colorado",
    date: "3/22/2022",
    basePath: "/photography-page/colorado/",
    imgNames: ["colorado-house.jpg", "colorado-mountains.jpg"],
  }),
  Barn: new PhotoSet({
    title: "Old Barn",
    location: "Wadena, MN",
    date: "8/11/2020",
    basePath: "/photography-page/barn/",
    imgNames: ["barn.jpg"],
  }),
};

export default photoSets;
