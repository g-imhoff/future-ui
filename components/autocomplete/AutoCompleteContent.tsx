import { getColor } from "../../src/color";
import { ColoredComponentsProps } from "../../components";
import { AbsolutePositionProps } from "../../src/position";
import { getRadius } from "../../src/radius";
import { getShadow } from "../../src/shadow";
import {
  getShowDynamicAbsolutePosition,
  getHideDynamicAbsolutePosition,
} from "../../src/position";

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
    "peer-[.focus]:DynamicContentShow",
    "peer-[.focus]:DynamicContentShowCenter",
    "peer-[.focus]:DynamicContentShowMiddle",
  );
  const hideDynamicPosition: string = getHideDynamicAbsolutePosition(
    position,
    "peer-[.notfocus]:DynamicContentHidden",
    "peer-[.notfocus]:DynamicContentHiddenCenter",
    "peer-[.notfocus]:DynamicContentHiddenMiddle",
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
