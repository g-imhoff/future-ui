import { BasicProps } from "../components";

interface AutoCompleteProps extends BasicProps {
  children: React.ReactNode;
}

export function getAutoCompleteSize(size?: string) {
  let sizeStyle: string = "";
  if (size) {
    switch (size) {
      case "full":
        sizeStyle = "w-full";
        break;
      case "lg":
        sizeStyle = "w-3/4";
        break;
      case "md":
        sizeStyle = "w-1/2";
        break;
      case "base":
        sizeStyle = "w-1/3";
        break;
      case "sm":
        sizeStyle = "w-1/4";
        break;
      default:
        sizeStyle = "w-full";
        break;
    }
  } else {
    sizeStyle = "w-full";
  }

  return sizeStyle;
}

export default function AutoComplete(props: AutoCompleteProps) {
  return (
    <div
      id={props.id}
      key={props.key}
      className={"w-full h-fit px-4 relative " + props.className}
    >
      {props.children}
    </div>
  );
}
