import { ColoredComponentsProps } from "@/future-ui/components";
import { getColor } from "@/future-ui/src/color";
import { getRadius } from "@/future-ui/src/radius";
import { getShadow } from "@/future-ui/src/shadow";
import { Children } from "react";
import Divider from "../divider/Divider";

interface AccordionProps extends ColoredComponentsProps {
  children: React.ReactNode;
}

function getAccordionStyle(props: AccordionProps): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const color: string = getColor(
    props.hasHoverEffect,
    props.color,
    props.variant,
    props.blurProps,
  );

  return radius + " " + shadow + " " + color;
}

export default function Accordion(props: AccordionProps): JSX.Element {
  const style: string = getAccordionStyle(props);
  const mappedChildren = Children.map(props.children, (child) => (
    <>
      {child}
      <Divider orientation="vertical" />
    </>
  ));

  return (
    <div id={props.id} className={"h-fit " + props.className + " " + style}>
      {mappedChildren}
    </div>
  );
}
