import { BasicProps } from "../components";
import "../position.css";

interface AutoCompleteProps extends BasicProps {
  children: React.ReactNode;
}

export default function AutoComplete(props: AutoCompleteProps) {
  return (
    <div id={props.id} className={"h-fit relative " + props.className}>
      {props.children}
    </div>
  );
}
