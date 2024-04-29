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
    basePath: "/photography-page/",
    imgNames: ["barn.jpg"],
  }),
};

export default photoSets;
