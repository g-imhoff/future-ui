import { getColor } from "../color";
import { ColoredComponentsProps } from "../components";
import { getRadius } from "../radius";
import { getShadow } from "../shadow";
import { getAutoCompleteSize } from "./AutoComplete";

interface AutoCompleteSearchBarProps extends ColoredComponentsProps {
  placeholder?: string;
  size?: "full" | "lg" | "md" | "base" | "sm";
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
  const size: string = getAutoCompleteSize(props.size);

  return radius + " " + shadow + " " + bgColor + " " + size;
}

export default function AutoCompleteSearchBar(
  props: AutoCompleteSearchBarProps,
) {
  const style: string =
    getAutoCompleteSize(props.size) +
    " " +
    getAutoCompleteSearchBarStyle(props);

  return (
    <div id={props.id} className="peer flex justify-center items-center">
      <label htmlFor="AutoCompleteSearchBar"></label>
      <input
        placeholder={props.placeholder}
        className={
          "h-8 px-4 mx-2 placeholder:text-sm outline-none placeholder:subpixel-antialiased " +
          style
        }
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        type="text"
        name="AutoCompleteSearchBar"
      />
    </div>
  );
}
