import { getBlur, getDefaultColor, getSoftColor } from "../../src/color";
import { BlurProps, ColoredComponentsProps } from "../../components";
import { getRadius } from "../../src/radius";
import { getShadow } from "../../src/shadow";

interface CommandDisplayProps extends ColoredComponentsProps {
  command: string;
}

function getCommandDisplayBorder(
  color?: "default" | "primary" | "secondary",
): string {
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

function getCommandDisplayColor(
  hasBorder?: boolean,
  color?: "default" | "primary" | "secondary",
  variant?: "default" | "blur" | "soft" | "borderonly",
  blurProps?: BlurProps,
): string {
  let style: string = "";
  if (variant) {
    switch (variant) {
      case "default":
        style = hasBorder
          ? getDefaultColor(color) + " " + getCommandDisplayBorder(color)
          : getDefaultColor(color);
        break;
      case "blur":
        style = hasBorder
          ? getBlur(blurProps) + " " + getCommandDisplayBorder(color)
          : getBlur(blurProps);
        break;
      case "soft":
        style = hasBorder
          ? getSoftColor(color) + " " + getCommandDisplayBorder(color)
          : getSoftColor(color);
        break;
      default:
        style = hasBorder
          ? getDefaultColor(color) + " " + getCommandDisplayBorder(color)
          : getDefaultColor(color);
        break;
    }
  } else {
    style = hasBorder
      ? getDefaultColor(color) + " " + getCommandDisplayBorder(color)
      : getDefaultColor(color);
  }

  if (color) {
    switch (color) {
      case "default":
        style += " text-default-800 dark:text-default-200";
        break;
      case "primary":
        style += " text-default-200";
        break;
      case "secondary":
        style += " text-default-200";
        break;
      default:
        style += " text-default-800 dark:text-default-200";
        break;
    }
  } else {
    style += " text-default-800 dark:text-default-200";
  }

  return style;
}

function getCommandDisplayStyle(props: CommandDisplayProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const color: string = getCommandDisplayColor(
    true,
    props.color,
    props.variant,
    props.blurProps,
  );

  return radius + " " + shadow + " " + color;
}

export default function CommandDisplay(props: CommandDisplayProps) {
  const style: string = getCommandDisplayStyle(props);
  return (
    <div
      id={props.id}
      className={"px-1 w-fit h-fit " + props.className + " " + style}
    >
      <p className="subpixel-antialiased">{props.command}</p>
    </div>
  );
}
