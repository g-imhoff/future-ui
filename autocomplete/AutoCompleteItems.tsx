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

function getAutoCompleteItemsShadow(shadow?: ShadowProps) {
  let color: string = "";
  let size: string = "";

  if (shadow) {
    if (shadow.color) {
      switch (shadow.color) {
        case "primary":
          color =
            "hover:shadow-primary-800/20 hover:dark:shadow-primary-200/20";
          break;
        case "secondary":
          color =
            "hover:shadow-secondary-800/20 hover:dark:shadow-secondary-200/20";
          break;
      }
    } else {
    }

    if (shadow.size) {
      switch (shadow.size) {
        case "2xl":
          size = "hover:shadow-2xl";
          break;
        case "xl":
          size = "hover:shadow-xl";
          break;
        case "lg":
          size = "hover:shadow-lg";
          break;
        case "md":
          size = "hover:shadow-md";
          break;
        case "base":
          size = "hover:shadow";
          break;
        case "sm":
          size = "hover:shadow-sm";
          break;
        case "none":
          return "shadow-none";
        default:
          size = "hover:shadow";
          break;
      }
    } else {
      size = "hover:shadow";
    }
  }

  return size + " " + color;
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
