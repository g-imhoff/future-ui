import { getColor } from "../color";
import { ColoredComponentsProps } from "../components";
import { AbsolutePositionProps } from "../position";
import { getRadius } from "../radius";
import { getShadow } from "../shadow";
import "./style.css";
import "../animation.css";

interface AutoCompleteContentProps extends ColoredComponentsProps {
  color?: "default" | "primary" | "secondary";
  children: React.ReactNode;
  position?: AbsolutePositionProps;
}

function getAutoCompleteContentStyle(props: AutoCompleteContentProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const bgColor: string = getColor(
    false,
    props.color,
    props.variant,
    props.blurProps,
  );

  return radius + " " + shadow + " " + bgColor;
}

export default function AutoCompleteContent(props: AutoCompleteContentProps) {
  const style: string = getAutoCompleteContentStyle(props);
  const position: string = props.position ? props.position : "bottom-center";

  return (
    <ul
      id={props.id}
      className={
        "AutoCompleteContentHidden hover:AutoCompleteContentShow peer-has-[:focus]:AutoCompleteContentShow h-fit absolute p-2 " +
        style +
        " " +
        props.className +
        " " +
        position
      }
    >
      {props.children}
    </ul>
  );
}
