import ExternalLink from "./ExternalLink.js";

export default function ExperienceTab(props) {
  return (
    <div className="block rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
      <h1 className="block text-3xl">{props.title}</h1>
      <h3 className="block text-xl text-gray-600">{props.position}</h3>
      <p className="block text-gray-600">{props.dateRange}</p>
      <p className="block">{props.description}</p>
      {props.link1 ? (
        <ExternalLink href={props.link1} text={props.link1Text} />
      ) : null}
      {props.link2 ? (
        <ExternalLink href={props.link2} text={props.link2Text} />
      ) : null}
    </div>
  );
}
