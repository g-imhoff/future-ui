import { getColor } from "../color";
import { ColoredComponentsProps } from "../components";
import { AbsolutePositionProps } from "../position";
import { getRadius } from "../radius";
import { getShadow } from "../shadow";
import {
  getShowDynamicAbsolutePosition,
  getHideDynamicAbsolutePosition,
} from "../animation";
import "../position.css";
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
  const position: AbsolutePositionProps = props.position
    ? props.position
    : "bottom-center";
  const showDynamicPosition: string = getShowDynamicAbsolutePosition(
    position,
    "peer-[.focus]:",
  );
  const hideDynamicPosition: string = getHideDynamicAbsolutePosition(
    position,
    "peer-[.notfocus]:",
  );

  return (
    radius +
    " " +
    shadow +
    " " +
    bgColor +
    " " +
    showDynamicPosition +
    " " +
    hideDynamicPosition +
    " " +
    position
  );
}

export default function AutoCompleteContent(props: AutoCompleteContentProps) {
  const style: string = getAutoCompleteContentStyle(props);

  return (
    <ul
      id={props.id}
      className={"h-fit absolute p-2 " + style + " " + props.className}
    >
      {props.children}
    </ul>
  );
}
