import { Children } from "react";
import { ColoredComponentsProps } from "../../components";
import { getRadius } from "../../src/radius";
import { getShadow, getHoverShadow } from "../../src/shadow";
import { getColor, getHoverColor } from "../../src/color";
import {
  AbsolutePositionProps,
  getShowDynamicAbsolutePosition,
  getHideDynamicAbsolutePosition,
} from "../../src/position";

interface DropDownContentProps extends ColoredComponentsProps {
  children: React.ReactNode;
  position?: AbsolutePositionProps;
}

function getDropDownContentStyle(props: DropDownContentProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const color: string = getColor(
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
    "peer-[.dynamicShow]:DynamicContentShow",
    "peer-[.dynamicShow]:DynamicContentShowCenter",
    "peer-[.dynamicShow]:DynamicContentShowMiddle",
  );
  const hideDynamicPosition: string = getHideDynamicAbsolutePosition(
    position,
    "peer-[.dynamicHide]:DynamicContentHidden",
    "peer-[.dynamicHide]:DynamicContentHiddenCenter",
    "peer-[.dynamicHide]:DynamicContentHiddenMiddle",
  );

  return (
    radius +
    " " +
    shadow +
    " " +
    color +
    " " +
    showDynamicPosition +
    " " +
    hideDynamicPosition +
    " " +
    position
  );
}

function getDropDownItemStyle(props: DropDownContentProps): string {
  const radius: string = getRadius(props.radius);
  let color: string = "";
  let shadow: string = "";

  if (props.hasHoverEffect) {
    color = getHoverColor(props.color, props.variant);
    if (props.variant !== "borderonly") shadow = getHoverShadow(props.shadow);
  }

  return radius + " " + color + " " + shadow;
}

export default function DropDownContent(props: DropDownContentProps) {
  const style: string = getDropDownContentStyle(props);
  const styleItem: string = getDropDownItemStyle(props);

  const itemChildren = Children.map(props.children, (child) => (
    <li className={styleItem + " transition-colors duration-300 p-2"}>
      {child}
    </li>
  ));

  return (
    <ul className={style + " h-fit p-2 " + props.className}>{itemChildren}</ul>
  );
}
