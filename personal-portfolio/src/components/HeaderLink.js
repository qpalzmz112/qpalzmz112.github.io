import Link from "next/link";

export default function HeaderLink(props) {
  return (
    <h1 className="inline-block text-2xl px-5 py-2">
      <Link href={props.path}>{props.text}</Link>
    </h1>
  );
}
