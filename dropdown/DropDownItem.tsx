import Link from "next/link";

interface DropDownItem {
  href: string;
  text: string;
}

export default function DropDownItem(props: DropDownItem) {
  return (
    <Link
      className="subpixel-antialiased flex justify-between grow w-full h-full"
      href={props.href}
    >
      {props.text}
    </Link>
  );
}
