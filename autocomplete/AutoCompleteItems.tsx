import { ComponentsProps, getRadius, ShadowProps } from "../components";

interface AutoCompleteItemsProps extends ComponentsProps {
  text: string;
  color?: "default" | "primary" | "secondary";
}

function getAutoCompleteItemsColor(color?: string): string {
  let colorStyle: string = "";

  if (color) {
    switch (color) {
      case "default":
        colorStyle = "hover:bg-default-200 dark:hover:bg-default-700";
        break;
      case "primary":
        colorStyle = "hover:bg-primary-400";
        break;
      case "secondary":
        colorStyle = "hover:bg-secondary-400";
        break;
      default:
        colorStyle = "hover:bg-default-200 dark:hover:bg-default-700";
        break;
    }
  } else {
    colorStyle = "hover:bg-default-200 dark:hover:bg-default-700";
  }

  return colorStyle;
}


function getAutoCompleteItemsStyle(props: AutoCompleteItemsProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getAutoCompleteItemsShadow(props.shadow);
  const color: string = getAutoCompleteItemsColor(props.color);

  return radius + " " + shadow + " " + color;
}

export default function AutoCompleteItems(props: AutoCompleteItemsProps) {
  const style: string = getAutoCompleteItemsStyle(props);

  return (
    <li
      id={props.id}
      key={props.key}
      className={
        "p-2 h-fit transition-colors duration-300 " +
        style +
        " " +
        props.className
      }
    >
      <p className="subpixel-antialiased">{props.text}</p>
    </li>
  );
}
