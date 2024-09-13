import { getHoverColor } from "../../src/color";
import { ColoredComponentsProps } from "../../components";
import { getRadius } from "../../src/radius";
import { getHoverShadow } from "../../src/shadow";

interface AutoCompleteItemsProps extends ColoredComponentsProps {
  text: string;
  color?: "default" | "primary" | "secondary";
}

function getAutoCompleteItemsStyle(props: AutoCompleteItemsProps): string {
  const radius: string = getRadius(props.radius);
  let shadow: string = "";
  let color: string = "";

  if (props.hasHoverEffect) {
    shadow = getHoverShadow(props.shadow);
    color = getHoverColor(props.color, props.variant);
  }

  return radius + " " + shadow + " " + color;
}

export default function AutoCompleteItems(props: AutoCompleteItemsProps) {
  const style: string = getAutoCompleteItemsStyle(props);
  return (
    <li
      key={props.id}
      id={props.id}
      className={"p-2 h-fit " + style + " " + props.className}
    >
      <p className="subpixel-antialiased">{props.text}</p>
    </li>
  );
}
