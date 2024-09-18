
import { BasicProps } from "../../components";
interface DividerProps extends BasicProps {
  orientation: "horizontal" | "vertical";
}

function getOrientatiton(orientation: "horizontal" | "vertical"): string {
  let finalOrientation: string = "";

  if (orientation === "horizontal") {
    finalOrientation = "w-full h-fit border-t";
  } else if (orientation === "vertical") {
    finalOrientation = "w-fit h-full border-r";
  }

  return finalOrientation;
}

function getDividerStyle(props: DividerProps): string {
  const orientation: string = getOrientatiton(props.orientation);

  return orientation;
}

export default function Divider(props: DividerProps): JSX.Element {
  const style: string = getDividerStyle(props);
  return (
    <div
      id={props.id}
      className={
        style + " border-black/20 dark:border-white/20 " + props.className
      }
    ></div>
  );
}
