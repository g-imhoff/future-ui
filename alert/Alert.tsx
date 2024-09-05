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
  svgCloseOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string | undefined): void;
}

function getAlertType(type?: string) : string {
  let color: string = "";

  if (type) {
    switch (type) {
      case "failed":
        color = "";
        break;
      case "success":
        color = "";
        break;
      case "warning":
        color = "";
        break;
      default:
        color = "bg-default-800 text-white";
        break;
    }
  } else {
    color = "bg-default-800 text-white";
  }

  return color;
}

function getAlertSize(size?: "xl" | "lg" | "md" | "base" | "sm") : string {
  let finalSize: string = "";

  if (size) {
    switch (size) {
      case "xl":
        finalSize = "";
        break;
      case "lg":
        finalSize = "";
        break;
      case "md":
        finalSize = "";
        break;
      case "base":
        finalSize = "";
        break;
      case "sm":
        finalSize = "";
        break;
      default:
        finalSize = "";
        break;
    }
  } else {
    finalSize = "w-96 h-fit";
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
    <div id={props.id} key={props.key} className={"subpixel-antialiased flex " + style + " " + props.className}>
      <Image className="h-full m-4" src={props.svg} alt={props.svgAlt} />
      <div className="flex justify-start items-center grow">
        {props.text}  
      </div> 
      <button className="h-full w-fit"onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => props.svgCloseOnClick(e, props.id)}> 
        <Image className="h-full m-4" src={props.svgClose} alt={props.svgCloseAlt} />
      </button>
    </div>
  )
}