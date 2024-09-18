import { BasicProps } from "../../components";

interface DropDownItemProps extends BasicProps {
  href: string;
  text: string;
}

export default function DropDownItem(props: DropDownItemProps) {
  return (
    <a
      id={props.id}
      className={
        "subpixel-antialiased flex justify-between grow w-full h-full " +
        props.className
      }
      href={props.href}
    >
      {props.text}
    </a>
  );
}
