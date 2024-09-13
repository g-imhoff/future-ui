import { BasicProps } from "../../components";
import "../../src/style/position.css";
import "../../src/style/animation.css";

interface DropDownProps extends BasicProps {
  children: React.ReactNode;
}

export default function DropDown(props: DropDownProps) {
  return (
    <div id={props.id} className={"w-fit h-fit relative " + props.className}>
      {props.children}
    </div>
  );
}
