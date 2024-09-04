import { ComponentsProps, getRadius, getShadow, ShadowProps } from "../components";

interface AutoCompleteItemsProps extends ComponentsProps {
  text: string;
  color?: "default" | "primary" | "secondary";
}

function getAutoCompleteItemsShadow(shadow?: ShadowProps) {
  let color: string = ""; 
  let size: string = ""; 

  if (shadow) {
    if (shadow.color) {
      switch (shadow.color) {
        case "primary":
          color = "hover:shadow-primary-800/20 hover:dark:shadow-primary-200/20";
          break;
        case "secondary":
          color = "hover:shadow-secondary-800/20 hover:dark:shadow-secondary-200/20";
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

function getAutoCompleteItemsStyle(props: AutoCompleteItemsProps) : string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getAutoCompleteItemsShadow(props.shadow);

  return radius + " " + shadow;
}

export default function AutoCompleteItems(props: AutoCompleteItemsProps) {
  const style: string = getAutoCompleteItemsStyle(props);

  return (
    <li className={"hover:bg-default-700 p-2 h-fit transition-colors duration-300 " + style}>
      <p className="subpixel-antialiased">{props.text}</p>
    </li>
  ) 
}
