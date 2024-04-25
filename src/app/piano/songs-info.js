class Song {
  constructor(name, composer, videoId) {
    this.name = name;
    this.composer = composer;
    this.videoId = videoId;
  }
}

let songs = [
  new Song("Graceful Ghost Rag", "William Bolcom", "YufmYPb2zZE"),
  new Song("Succession Finale Suite", "Katherine Cordova", "11Wfs20GHsI"),
  new Song("Succession Suite", "Katherine Cordova", "6N60EEi-gCY"),
  new Song("L'Orage (The Storm)", "Johann Burgmüller", "CYJ3I5qqBAw"),
];

export default songs;
