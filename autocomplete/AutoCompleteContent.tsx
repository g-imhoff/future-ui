import { getColor } from "../color";
import { ColoredComponentsProps } from "../components";
import { getRadius } from "../radius";
import { getShadow } from "../shadow";
import { getAutoCompleteSize } from "./AutoComplete";
import "./style.css";

interface AutoCompleteContentProps extends ColoredComponentsProps {
  color?: "default" | "primary" | "secondary";
  size?: "full" | "lg" | "md" | "base" | "sm";
  children: React.ReactNode;
}

function getAutoCompleteContentStyle(props: AutoCompleteContentProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const bgColor: string = getColor(
    props.hasHoverEffect,
    props.color,
    props.variant,
    props.blurProps,
  );
  const size: string = getAutoCompleteSize(props.size);

  return radius + " " + shadow + " " + bgColor + " " + size;
}

export default function AutoCompleteContent(props: AutoCompleteContentProps) {
  const style: string = getAutoCompleteContentStyle(props);

  return (
    <ul
      id={props.id}
      className={
        "hidden hover:AutoCompleteContentShow peer-has-[:focus]:AutoCompleteContentShow h-fit absolute mt-4 p-2 " +
        style +
        " " +
        props.className
      }
    >
      {props.children}
    </ul>
  );
}
