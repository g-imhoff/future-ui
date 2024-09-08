import Image from "next/image";
import { ComponentsProps, getRadius, getShadow } from "../components";
import "./style.css";

interface AlertProps extends ComponentsProps {
  type?: "failed" | "success" | "warning";
  text: string;
  size?: "xl" | "lg" | "md" | "base" | "sm";
  svg: any;
  svgAlt: string;
  svgClose: any;
  svgCloseAlt: string;
  svgCloseOnClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string | undefined,
  ): void;
}

function getAlertType(type?: string): string {
  let color: string = "";

  if (type) {
    switch (type) {
      case "failed":
        color = "bg-negative-500 text-white";
        break;
      case "success":
        color = "bg-positive-500 text-white";
        break;
      case "warning":
        color = "bg-warning-500 text-white";
        break;
      default:
        color = "bg-default-200 dark:bg-default-800 text-black dark:text-white";
        break;
    }
  } else {
    color = "bg-default-200 dark:bg-default-800 text-black dark:text-white";
  }

  return color;
}

function getAlertSize(size?: "xl" | "lg" | "md" | "base" | "sm"): string {
  let finalSize: string = "";

  if (size) {
    switch (size) {
      case "xl":
        finalSize = "w-full";
        break;
      case "lg":
        finalSize = "w-3/4";
        break;
      case "md":
        finalSize = "w-1/2";
        break;
      case "base":
        finalSize = "w-1/3";
        break;
      case "sm":
        finalSize = "w-1/4";
        break;
      default:
        finalSize = "w-1/3";
        break;
    }
  } else {
    finalSize = "w-1/3";
  }

  return finalSize;
}

function getAlertStyle(props: AlertProps) {
  const type: string = getAlertType(props.type);
  const size: string = getAlertSize(props.size);
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);

  return type + " " + size + " " + radius + " " + shadow;
}

export default function Alert(props: AlertProps) {
  const style: string = getAlertStyle(props);
  return (
    <div
      id={props.id}
      key={props.key}
      className={
        "subpixel-antialiased flex h-fit " + style + " " + props.className
      }
    >
      <Image className="h-full m-4" src={props.svg} alt={props.svgAlt} />
      <div className="flex justify-start items-center grow">
        <p className="subpixel-antialiased">{props.text}</p>
      </div>
      <button
        className="h-full w-fit"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          props.svgCloseOnClick(e, props.id)
        }
      >
        <Image
          className="h-full m-4"
          src={props.svgClose}
          alt={props.svgCloseAlt}
        />
      </button>
    </div>
  );
}
