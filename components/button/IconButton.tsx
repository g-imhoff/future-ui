import { BasicProps } from "../../components";
import { ButtonProps } from "./Button";
import { getRadius } from "../../src/radius";
import { getShadow } from "../../src/shadow";
import { getColor } from "../../src/color";

export interface IconButtonProps extends ButtonProps {
  svg(props: BasicProps): JSX.Element;
  svgBlack(props: BasicProps): JSX.Element;
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
      default:
        return "h-10";
    }
  } else {
    return "h-10";
  }
}

function getIconButtonStyle(props: IconButtonProps): string {
  let size: string = getIconButtonSize(props.size);
  let radius: string = getRadius(props.radius);
  let shadow: string = getShadow(props.shadow);
  let bgColor: string = getColor(
    props.hasHoverEffect,
    props.color,
    props.variant,
    props.blurProps,
  );
  let className: string = props.className !== undefined ? props.className : "";

  return (
    "flex justify-center items-center aspect-square w-fit " +
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

export default function IconButton(props: IconButtonProps) {
  let style: string = getIconButtonStyle(props);

  function ifSvgBlackExist() {
    if (props.svgBlack) {
      return (
        <>
          {props.svg({
            className: "hidden dark:block aspect-square h-3/4 w-auto",
          })}
          {props.svgBlack({
            className: "block dark:hidden aspect-square h-3/4 w-auto",
          })}
        </>
      );
    }

    return <>{props.svg({ className: "aspect-square h-3/4 w-auto" })}</>;
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
