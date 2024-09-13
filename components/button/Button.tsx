import { getColor } from "../../src/color";
import { ColoredComponentsProps } from "../../components";
import { getRadius } from "../../src/radius";
import { getShadow } from "../../src/shadow";

export interface ButtonProps extends ColoredComponentsProps {
  text: string;
  ariaLabel: string;
  size?: "xl" | "lg" | "base" | "sm";
  onClick(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

function getButtonSize(size?: string): string {
  let finalSize: string = "";
  if (size) {
    switch (size) {
      case "xl":
        finalSize = "text-xl h-14 px-4";
      case "lg":
        finalSize = "text-lg h-12 px-4";
      case "base":
        finalSize = "h-10 px-4";
      case "sm":
        finalSize = "text-sm h-8 px-3";
      default:
        finalSize = "h-10 px-4";
    }
  } else {
    finalSize = "h-10 px-4";
  }

  return "w-fit " + finalSize;
}

function getButtonStyle(props: ButtonProps): string {
  let size: string = getButtonSize(props.size);
  let radius: string = getRadius(props.radius);
  let shadow: string = getShadow(props.shadow);
  let bgColor: string = getColor(
    props.hasHoverEffect,
    props.color,
    props.variant,
    props.blurProps,
  );
  let className: string = props.className !== undefined ? props.className : "";

  return size + " " + radius + " " + shadow + " " + bgColor + " " + className;
}

export default function Button(props: ButtonProps) {
  let style: string = getButtonStyle(props);
  return (
    <button
      aria-label={props.ariaLabel}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
        props.onClick(e)
      }
      className={style}
    >
      <p className="subpixel-antialiased">{props.text}</p>
    </button>
  );
}
