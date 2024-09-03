import Image from "next/image";
import { ButtonProps } from "./Button";
import { getRadius, getShadow } from "../components";
import { getButtonBorder, getButtonColor } from "./Button";

export interface IconButtonProps<T> extends ButtonProps<T> {
  svg: any;
  svgBlack?: any;
}

function getIconButtonSize(size?: "xl" | "lg" | "base" | "sm"): string {
  if (size) {
    switch (size) {
      case "xl":
        return "h-14";
      case "lg":
        return "h-12";
      case "base":
        return "h-10";
      case "sm":
        return "h-8";
      default:
        return "h-10";
    }
  } else {
    return "h-10";
  }
}

function getIconButtonStyle<T>(props: IconButtonProps<T>): string {
  let size: string = getIconButtonSize(props.size);
  let radius: string = getRadius(props.radius);
  let shadow: string = getShadow(props.shadow);
  let bgColor: string = "";
  if (props.variant === "borderOnly") {
    bgColor = getButtonBorder(props.color, props.size);
  } else {
    bgColor = getButtonColor(props.color);
  }
  let className: string = props.className !== undefined ? props.className : "";

  return (
    "flex justify-center items-center aspect-square w-auto " +
    size +
    " " +
    radius +
    " " +
    shadow +
    " " +
    bgColor +
    " " +
    className
  );
}

export default function IconButton<T>(props: IconButtonProps<T>) {
  let style: string = getIconButtonStyle<T>(props);

  function ifSvgBlackExist() {
    if (props.svgBlack) {
      return (
        <>
          <Image
            className="hidden dark:block aspect-square h-3/4 w-auto"
            src={props.svg}
            alt={props.text}
          />
          <Image
            className="block dark:hidden aspect-square h-3/4 w-auto"
            src={props.svgBlack}
            alt={props.text}
          />
        </>
      );
    }

    return (
      <Image
        className="aspect-square h-3/4 w-auto"
        src={props.svg}
        alt={props.text}
      />
    );
  }

  return (
    <button
      aria-label={props.ariaLabel}
      onClick={(e) => props.onClick(e)}
      className={style}
    >
      {ifSvgBlackExist()}
    </button>
  );
}
