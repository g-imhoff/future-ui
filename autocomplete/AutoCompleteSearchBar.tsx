import { getColor } from "../color";
import { ColoredComponentsProps } from "../components";
import { getRadius } from "../radius";
import { getShadow } from "../shadow";

interface AutoCompleteSearchBarProps extends ColoredComponentsProps {
  placeholder?: string;
  color?: "default" | "primary" | "secondary";
  value: string;
  setValue(e: string): void;
}

function getAutoCompleteSearchBarStyle(
  props: AutoCompleteSearchBarProps,
): string {
  const radius: string = getRadius(props.radius);
  const shadow: string = getShadow(props.shadow);
  const bgColor: string = getColor(
    props.hasHoverEffect,
    props.color,
    props.variant,
    props.blurProps,
  );

  return radius + " " + shadow + " " + bgColor;
}

export default function AutoCompleteSearchBar(
  props: AutoCompleteSearchBarProps,
): JSX.Element {
  const style: string = getAutoCompleteSearchBarStyle(props);

  return (
    <div id={props.id} className="w-full h-fit peer">
      <label htmlFor="AutoCompleteSearchBar"></label>
      <input
        placeholder={props.placeholder}
        className={
          "h-8 px-4 placeholder:text-sm outline-none placeholder:subpixel-antialiased " +
          style +
          " " +
          props.className
        }
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        type="text"
        name="AutoCompleteSearchBar"
      />
    </div>
  );
}
