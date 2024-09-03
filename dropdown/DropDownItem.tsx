import Link from "next/link";

interface DropDownItem {
  href: string;
  text: string;
}

export default function DropDownItem(props: DropDownItem) {
  return (
    <Link href={props.href}>{props.text}</Link>
  )
}