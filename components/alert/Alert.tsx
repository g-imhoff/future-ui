import { BasicProps, ComponentsProps } from "../../components";
import "./style.css";
import { getRadius } from "../../src/radius";
import { getShadow } from "../../src/shadow";
import { useId } from "react";

interface AlertProps extends ComponentsProps {
  type?: "failed" | "success" | "warning";
  text: string;
  svg(props: BasicProps): JSX.Element;
  svgClose(props: BasicProps): JSX.Element;
  svgCloseOnClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string | undefined,
  ): void;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
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

function getAlertPosition(position?: string): string | undefined {
  if (position) {
    switch (position) {
      case "top-left":
        return "alertDynamicShowTopLeft";
      case "top-right":
        return "alertDynamicShowTopRight";
      case "bottom-left":
        return "alertDynamicShowBottomLeft";
      case "bottom-right":
        return "alertDynamicShowBottomRight";
    }
  }
}

function getAlertStyle(props: AlertProps) {
  const type: string = getAlertType(props.type);
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const position: string | undefined = getAlertPosition(props.position);

  return type + " " + radius + " " + shadow + " " + (position ? position : "");
}

export default function Alert(props: AlertProps) {
  const hookId = useId();
  const id = props.id ? props.id : hookId;
  const style: string = getAlertStyle(props);

  function handleCloseAlert(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string | undefined,
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right",
  ): void {
    if (id) {
      const element = document.getElementById(id);

      if (position) {
        switch (position) {
          case "top-left":
            if (element?.classList.contains("alertDynamicShowTopLeft")) {
              element?.classList.remove("alertDynamicShowTopLeft");
              element?.classList.add("alertDynamicHideTopLeft");
            }
            break;
          case "top-right":
            if (element?.classList.contains("alertDynamicShowTopRight")) {
              element?.classList.remove("alertDynamicShowTopRight");
              element?.classList.add("alertDynamicHideTopRight");
            }
            break;
          case "bottom-left":
            if (element?.classList.contains("alertDynamicShowBottomLeft")) {
              element?.classList.remove("alertDynamicShowBottomLeft");
              element?.classList.add("alertDynamicHideBottomLeft");
            }
            break;
          case "bottom-right":
            if (element?.classList.contains("alertDynamicShowBottomRight")) {
              element?.classList.remove("alertDynamicShowBottomRight");
              element?.classList.add("alertDynamicHideBottomRight");
            }
            break;
        }
      }
    }

    props.svgCloseOnClick(e, id);
  }

  return (
    <div
      id={id}
      className={
        "subpixel-antialiased flex h-fit " + style + " " + props.className
      }
    >
      {props.svg({
        className: "h-full m-4 w-6 fill-none stroke-black dark:stroke-white",
      })}
      <div className="flex justify-start items-center grow">
        <p className="subpixel-antialiased">{props.text}</p>
      </div>
      <button
        className="h-full w-fit"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleCloseAlert(e, id, props.position)
        }
      >
        {props.svgClose({
          className: "h-full m-4 w-6 fill-none stroke-black dark:stroke-white",
        })}
      </button>
    </div>
  );
}
