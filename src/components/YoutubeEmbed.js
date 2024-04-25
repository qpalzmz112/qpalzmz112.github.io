export default function YoutubeEmbed(props) {
  return (
    <div>
      <iframe
        width={`${props.width}`}
        height={`${props.height}`}
        src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
        allowFullScreen
        title={`${props.title} video`}
      />
    </div>
  );
}
