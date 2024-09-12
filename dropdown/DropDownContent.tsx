import { Children } from "react";
import { ColoredComponentsProps } from "../components";
import { getRadius } from "../radius";
import { getShadow, getHoverShadow } from "../shadow";
import { getColor, getHoverColor } from "../color";
import { AbsolutePositionProps } from "../position";
import "../position.css";
import "../animation.css";
import {
  DynamicAbsolutePositionValue,
  getDynamicAbsolutePosition,
} from "../animation";

interface DropDownContentProps extends ColoredComponentsProps {
  contentId: string;
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

  return radius + " " + shadow + " " + color;
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
  const position: AbsolutePositionProps = props.position
    ? props.position
    : "bottom-center";
  const dynamicPosition: DynamicAbsolutePositionValue =
    getDynamicAbsolutePosition(position);

  const itemChildren = Children.map(props.children, (child) => (
    <li className={styleItem + " transition-colors duration-300 p-2"}>
      {child}
    </li>
  ));

  return (
    <ul
      id={props.contentId}
      className={
        style +
        " h-fit p-2 " +
        props.className +
        " " +
        position +
        " " +
        dynamicPosition.show +
        " " +
        dynamicPosition.hide
      }
    >
      {itemChildren}
    </ul>
  );
}
