import "./style.css";
import { Children } from "react";
import { ColoredComponentsProps } from "../components";
import { getRadius } from "../radius";
import { getShadow, getHoverShadow } from "../shadow";
import { getColor, getHoverColor } from "../color";

interface DropDownContentProps extends ColoredComponentsProps {
  contentId: string;
  size?: "xl" | "lg" | "md" | "base" | "sm";
  children: React.ReactNode;
}

function getDropDownContentSize(size?: string): string {
  let sizeStyle: string = "";
  if (size) {
    switch (size) {
      case "xl":
        sizeStyle = "w-96";
        break;
      case "lg":
      case "md":
        sizeStyle = "w-64";
        break;
      case "base":
        sizeStyle = "w-56";
        break;
      case "sm":
        sizeStyle = "w-40";
        break;
      default:
        sizeStyle = "w-56";
        break;
    }
  } else {
    sizeStyle = "w-56";
  }

  return sizeStyle;
}

function getDropDownContentStyle(props: DropDownContentProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const color: string = getColor(
    props.hasHoverEffect,
    props.color,
    props.variant,
    props.blurProps,
  );
  const size: string = getDropDownContentSize(props.size);

  return radius + " " + shadow + " " + color + " " + size;
}

function getDropDownItemStyle(props: DropDownContentProps): string {
  const radius: string = getRadius(props.radius);
  const color: string = props.hasHoverEffect
    ? getHoverColor(props.color, props.variant)
    : "";
  const shadow: string = getHoverShadow(props.shadow);

  return radius + " " + color + " " + shadow;
}

export default function DropDownContent(props: DropDownContentProps) {
  const style: string = getDropDownContentStyle(props);
  const styleItem: string = getDropDownItemStyle(props);

  const itemChildren = Children.map(props.children, (child) => (
    <li className={styleItem + " transition-colors duration-300 p-2"}>
      {child}
    </li>
  ));

  return (
    <ul
      id={props.contentId}
      className={
        style +
        " h-fit p-2 mt-4 absolute DropDownContentHidden hover:DropDownContentShow " +
        props.className
      }
    >
      {itemChildren}
    </ul>
  );
}
