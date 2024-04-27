import YoutubeEmbed from "./YoutubeEmbed.js";

export default function PianoTab(props) {
  return (
    <div className="grid place-items-center block rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
      <div className="p-2">
        <h1 className="block text-3xl">{props.name}</h1>
        <h3 className="block text-xl text-gray-600">{props.composer}</h3>
        {props.desc ? <p className="block">{props.desc}</p> : null}
        {props.videoId ? (
          <YoutubeEmbed
            title={props.title}
            height="180"
            width="320"
            videoId={props.videoId}
          />
        ) : null}
      </div>
    </div>
  );
}
