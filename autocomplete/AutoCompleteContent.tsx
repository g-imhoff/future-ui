import { getColor } from "../color";
import { ColoredComponentsProps } from "../components";
import { getRadius } from "../radius";
import { getShadow } from "../shadow";
import "./style.css";

interface AutoCompleteContentProps extends ColoredComponentsProps {
  color?: "default" | "primary" | "secondary";
  children: React.ReactNode;
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

  return (
    <ul
      id={props.id}
      className={
        "hidden hover:AutoCompleteContentShow peer-has-[:focus]:AutoCompleteContentShow h-fit absolute mt-4 p-2 " +
        style +
        " " +
        props.className
      }
    >
      {props.children}
    </ul>
  );
}
