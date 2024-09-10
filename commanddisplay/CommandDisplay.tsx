import { getBlur, getDefaultColor, getSoftColor } from "../color";
import { BlurProps, ComponentsProps } from "../components";
import { getRadius } from "../radius";
import { getShadow } from "../shadow";

interface CommandDisplayProps extends ComponentsProps {
  command: string;
  color?: "default" | "primary" | "secondary";
  variant?: "default" | "soft" | "blur";
  hasBorder?: boolean;
  blurProps?: BlurProps;
}

function getCommandDisplayBorder(color?: "default" | "primary" | "secondary") : string {
  let border: string = "";
  if (color) {
    switch (color) {
      case "default":
        border = "border-default-400 dark:border-default-600";
        break;
      case "primary":
        border = "border-primary-700";
        break;
      case "secondary":
        border = "border-secondary-700";
        break;
      default: 
        border = "border-default-400 dark:border-default-600";
        break;
    }
  } else {
    border = "border-default-400 dark:border-default-600";
  }

  return "border " + border;
}

function getCommandDisplayColor(hasBorder?: boolean, color?: "default" | "primary" | "secondary", variant?: "default" | "blur" | "soft", blurProps?: BlurProps) : string {
  if (variant) {
    switch (variant) {
      case "default":
        return hasBorder ? getDefaultColor(color) + " " + getCommandDisplayBorder(color) : getDefaultColor(color);
      case "blur":
        return hasBorder ? getBlur(blurProps) + " " + getCommandDisplayBorder() : getBlur(blurProps);
      case "soft":
        return hasBorder ? getSoftColor(color) +  " " + getCommandDisplayBorder() : getSoftColor(color);
      default:
        return hasBorder ? getDefaultColor(color) + " " + getCommandDisplayBorder(color) : getDefaultColor(color);
    }
  } else {
    return hasBorder ? getDefaultColor(color) + " " + getCommandDisplayBorder(color) : getDefaultColor(color);
  }
}

function getCommandDisplayStyle(props: CommandDisplayProps) :string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const color: string = getCommandDisplayColor(props.hasBorder, props.color, props.variant, props.blurProps);

  return radius + " " + shadow + " " + color;
} 


export default function CommandDisplay(props: CommandDisplayProps) {
  const style: string = getCommandDisplayStyle(props);
  return (
    <div id={props.id} key={props.key} className={"p-1 m-1 w-fit h-fit " + props.className + " " + style}>
      <p className="subpixel-antialiased text-xs sm:text-sm md:text-md text-default-400 dark:text-default-500">
        {props.command}
      </p>
    </div>
  );
}
