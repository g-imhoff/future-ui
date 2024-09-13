import { ColoredComponentsProps } from "@/future-ui/components";
import { getColor } from "@/future-ui/src/color";
import { getRadius } from "@/future-ui/src/radius";
import { getShadow } from "@/future-ui/src/shadow";

interface AccordionProps extends ColoredComponentsProps {
  title: string;
  text: string;
}

function getAccordionStyle(props: AccordionProps) {
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

export default function Accordion(props: AccordionProps) {
  const style: string = getAccordionStyle(props);

  return (
    <div
      id={props.id}
      className={"h-fit " + props.className + " " + style}
    ></div>
  );
}
