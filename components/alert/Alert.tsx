import Image from "next/image";
import { ComponentsProps } from "../../components";
import "./style.css";
import { getRadius } from "../../src/radius";
import { getShadow } from "../../src/shadow";

interface AlertProps extends ComponentsProps {
  type?: "failed" | "success" | "warning";
  text: string;
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

function getAlertStyle(props: AlertProps) {
  const type: string = getAlertType(props.type);
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);

  return type + " " + radius + " " + shadow;
}

export default function Alert(props: AlertProps) {
  const style: string = getAlertStyle(props);
  return (
    <div
      id={props.id}
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
