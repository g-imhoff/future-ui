import { ComponentsProps, getRadius, getShadow } from "../components";
import { getAutoCompleteSize } from "./AutoComplete";
import { getAutoCompleteContentBackground } from "./AutoCompleteContent";
import { ChangeEvent } from "react";

interface AutoCompleteSearchBarProps extends ComponentsProps {
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
  const bgColor: string = getAutoCompleteContentBackground(props.color);

  return radius + " " + shadow + " " + bgColor;
}

export default function AutoCompleteSearchBar(
  props: AutoCompleteSearchBarProps,
) {
  const style: string = getAutoCompleteSize(props.size) + " " + getAutoCompleteSearchBarStyle(props);

  return (
    <div className="peer flex justify-center items-center">
      <label htmlFor=""></label>
      <input
        placeholder={props.placeholder}
        className={
          "w-full h-8 px-4 mx-2 placeholder:text-sm outline-none placeholder:subpixel-antialiased " +
          style
        }
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}
