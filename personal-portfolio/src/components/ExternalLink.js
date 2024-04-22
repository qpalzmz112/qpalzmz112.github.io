import Link from "next/link";

export default function ExternalLink(props) {
  return (
    <Link
      className={`text-sand-green block underline hover:text-lego-green ${props.className}`}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}
