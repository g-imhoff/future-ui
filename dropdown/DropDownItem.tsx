import Link from "next/link";
import { BasicProps } from "../components";

interface DropDownItem extends BasicProps {
  href: string;
  text: string;
}

export default function DropDownItem(props: DropDownItem) {
  return (
    <Link
      key={props.key}
      id={props.id}
      className={"subpixel-antialiased flex justify-between grow w-full h-full " + props.className}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}
