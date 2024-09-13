import { getColor } from "../../src/color";
import { ColoredComponentsProps } from "../../components";
import { getRadius } from "../../src/radius";
import { getShadow } from "../../src/shadow";
import { useId } from "react";

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
  const id: string = props.id ? props.id : useId();

  function handleFocus(): void {
    const element = document.getElementById(id);

    if (element) {
      if (element.classList.contains("notfocus"))
        element.classList.remove("notfocus");
      element.classList.add("focus");
    }
  }

  function handleBlur(): void {
    const element = document.getElementById(id);

    if (element) {
      if (element.classList.contains("focus"))
        element.classList.remove("focus");
      element.classList.add("notfocus");
    }
  }

  return (
    <div id={id} className="w-full h-fit peer notfocus">
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
        onFocus={(): void => handleFocus()}
        onBlur={(): void => handleBlur()}
      />
    </div>
  );
}
