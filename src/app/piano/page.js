import { Boilerplate, PianoTab, InfoText } from "../index.js";
import songs from "./songs-info.js";

export default function Home() {
  return (
    <Boilerplate>
      <InfoText>
        These are some of the piano songs I&apos;ve been playing.
      </InfoText>
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
    </Boilerplate>
  );
}
