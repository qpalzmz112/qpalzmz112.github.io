import { Header, PianoTab } from "../index.js";
import songs from "./songs-info.js";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-white to-sand-green absolute h-screen w-screen font-playfair text-black">
      <Header />
      <div className="p-4 text-xl">
        These are some of the piano songs I've been playing.
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {songs.map((song) => (
          <PianoTab
            key={song.videoId}
            name={song.name}
            composer={song.composer}
            videoId={song.videoId}
          />
        ))}
      </div>
    </main>
  );
}
