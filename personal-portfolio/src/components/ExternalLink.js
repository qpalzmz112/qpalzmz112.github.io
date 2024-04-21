import Link from "next/link";

export default function ExternalLink(props) {
  return (
    <Link className="text-sand-green block" href={props.href}>
      {props.text}
    </Link>
  );
}
