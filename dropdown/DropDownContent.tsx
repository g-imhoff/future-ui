import { Children } from "react";
import "./style.css";
import { ComponentsProps, getRadius, getShadow } from "../components";

interface DropDownContentProps extends ComponentsProps {
  contentId: string;
  color?: "default" | "primary" | "secondary";
  size?: "xl" | "lg" | "md" | "base" | "sm";
  children: React.ReactNode;
}

function getDropDownItemColor(color?: string): string {
  let colorStyle: string = "";
  if (color) {
    switch (color) {
      case "default":
        colorStyle = "hover:bg-default-200 dark:hover:bg-default-700";
        break;
      case "primary":
        colorStyle = "bg-primary-500 hover:bg-primary-400";
        break;
      case "secondary":
        colorStyle = "bg-secondary-500 hover:bg-secondary-400";
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

function getDropDownContentColor(color?: string): string {
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

function getDropDownContentSize(size?: string): string {
  let sizeStyle: string = "";
  if (size) {
    switch (size) {
      case "xl":
        sizeStyle = "w-96";
        break;
      case "lg":
        sizeStyle = "w-80";
        break;
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
  const color: string = getDropDownContentColor(props.color);
  const size: string = getDropDownContentSize(props.size);

  return radius + " " + shadow + " " + color + " " + size;
}

function getDropDownItemStyle(props: DropDownContentProps): string {
  const radius: string = getRadius(props.radius);
  const color: string = getDropDownItemColor(props.color);

  return radius + " " + color;
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
      className={style + " h-fit p-2 mt-4 absolute DropDownContentHidden"}
    >
      {itemChildren}
    </ul>
  );
}
