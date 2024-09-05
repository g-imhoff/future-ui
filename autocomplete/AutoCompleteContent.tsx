import { ComponentsProps, getRadius, getShadow } from "../components";
import { getAutoCompleteSize } from "./AutoComplete";
import "./style.css";

interface AutoCompleteContentProps extends ComponentsProps {
  color?: "default" | "primary" | "secondary";
  size?: "full" | "lg" | "md" | "base" | "sm";
  children: React.ReactNode;
}

export function getAutoCompleteContentBackground(color?: string) {
  let colorStyle: string = "";
  if (color) {
    switch (color) {
      case "default":
        colorStyle =
          "bg-default-100 dark:bg-default-800 text-black dark:text-white";
        break;
      case "primary":
        colorStyle = "bg-primary-500 text-white";
        break;
      case "secondary":
        colorStyle = "bg-secondary-500 text-white";
        break;
      default:
        colorStyle =
          "bg-default-100 dark:bg-default-800 text-black dark:text-white";
        break;
    }
  } else {
    colorStyle =
      "bg-default-100 dark:bg-default-800 text-black dark:text-white";
  }

  return colorStyle;
}

function getAutoCompleteContentStyle(props: AutoCompleteContentProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const bgColor: string = getAutoCompleteContentBackground(props.color);
  const size: string = getAutoCompleteSize(props.size);

  return radius + " " + shadow + " " + bgColor + " " + size;
}

export default function AutoCompleteContent(props: AutoCompleteContentProps) {
  const style: string = getAutoCompleteContentStyle(props);

  return (
    <ul
      id={props.id}
      key={props.key}
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
