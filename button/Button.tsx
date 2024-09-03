import { ComponentsProps, getRadius, getShadow } from "../components";

/**
 * @interface ButtonProps<T>
 *
 * This interface defines the properties for a button component within the UI kit.
 * It extends the `ComponentsProps` interface to inherit common styling properties
 * and adds additional button-specific properties.
 *
 * @typeparam T - The return type of the `onClick` event handler function.
 *
 * @param {string} text - The text label displayed on the button.
 *
 * @param {string} ariaLabel - A descriptive label for the button used by screen readers
 * to improve accessibility. This prop is essential for providing context to visually
 * impaired users, particularly when the button contains only an icon or non-textual content.k
 *
 * @param {"xl" | "lg" | "base" | "sm"} [size] - The size of the button.
 * Acceptable values are:
 * - `"xl"`: Extra large
 * - `"lg"`: Large
 * - `"base"`: Base (default)
 * - `"sm"`: Small
 *
 * @param {"default" | "primary" | "secondary"} [color] - The color theme of the button.
 * Acceptable values are:
 * - `"default"`: Default color scheme
 * - `"primary"`: Primary action color
 * - `"secondary"`: Secondary action color
 *
 * @param {"borderOnly"} [variant] - The visual style of the button.
 * Currently, the only acceptable value is `"borderOnly"`, which indicates a button
 * with only a border and no fill color.
 *
 * @param {(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => T} onClick -
 * A function to be called when the button is clicked. It receives an optional
 * `MouseEvent` and returns a value of type `T`.
 *
 * This interface is designed to ensure that button components are created with
 * a consistent API, providing flexibility in their appearance and behavior
 * while adhering to the design system.
 */

export interface ButtonProps<T> extends ComponentsProps {
  text: string;
  ariaLabel: string;
  size?: "xl" | "lg" | "base" | "sm";
  color?: "default" | "primary" | "secondary";
  variant?: "borderOnly";
  onClick(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): T;
}

function getButtonSize(size?: string): string {
  if (size) {
    switch (size) {
      case "xl":
        return "text-xl h-14 px-4";
      case "lg":
        return "text-lg h-12 px-4";
      case "base":
        return "w-auto h-10 px-4";
      case "sm":
        return "text-sm h-8 px-3";
      default:
        return "w-auto h-10 px-4";
    }
  } else {
    return "w-auto h-10 px-4";
  }
}

export function getButtonColor(color?: string): string {
  let finalColor: string = "";

  if (color) {
    switch (color) {
      case "default":
        finalColor =
          "bg-default-100 hover:bg-default-200 text-black dark:bg-default-800 dark:hover:bg-default-700 dark:text-white";
        break;
      case "primary":
        finalColor = "bg-primary-500 hover:bg-primary-400 text-white";
        break;
      case "secondary":
        finalColor = "bg-secondary-500 hover:bg-secondary-400 text-white";
        break;
      default:
        finalColor =
          "bg-default-100 hover:bg-default-200 text-black dark:bg-default-800 dark:hover:bg-default-700 dark:text-white";
        break;
    }
  } else {
    finalColor =
      "bg-default-100 hover:bg-default-200 text-black dark:bg-default-800 dark:hover:bg-default-700 dark:text-white";
  }

  return finalColor + " transition-colors duration-300";
}

export function getButtonBorder(color?: string, size?: string): string {
  let finalSize: string = "";
  let finalColor: string = "";

  if (size) {
    switch (size) {
      case "xl":
        finalSize = "";
        break;
      case "lg":
        finalSize = "";
        break;
      case "base":
        finalSize = "border-2";
        break;
      case "sm":
        finalSize = "";
        break;
      default:
        finalSize = "border-2";
        break;
    }
  } else {
    finalSize = "border-2";
  }

  if (color) {
    switch (color) {
      case "default":
        finalColor =
          "border-default-100 hover:border-default-200 dark:border-default-800 dark:hover:border-default-700 text-black dark:text-white";
        break;
      case "primary":
        finalColor =
          "border-primary-500 hover:border-primary-400 text-primary-500";
        break;
      case "secondary":
        finalColor =
          "border-secondary-500 hover:border-secondary-400 text-secondary-500";
        break;
      default:
        finalColor =
          "border-default-100 hover:border-default-200 dark:border-default-800 dark:hover:border-default-700 text-black dark:text-white";
        break;
    }
  } else {
    finalColor =
      "border-default-100 hover:border-default-200 dark:border-default-800 dark:hover:border-default-700 text-black dark:text-white";
  }

  return (
    finalSize +
    " " +
    finalColor +
    " bg-transparent transition-colors duration-300"
  );
}

function getButtonStyle<T>(props: ButtonProps<T>): string {
  let size: string = getButtonSize(props.size);
  let radius: string = getRadius(props.radius);
  let shadow: string = getShadow(props.shadow);
  let bgColor: string = "";
  if (props.variant === "borderOnly") {
    bgColor = getButtonBorder(props.color, props.size);
  } else {
    bgColor = getButtonColor(props.color);
  }
  let className: string = props.className !== undefined ? props.className : "";

  return size + " " + radius + " " + shadow + " " + bgColor + " " + className;
}

export default function Button<T>(props: ButtonProps<T>) {
  let style: string = getButtonStyle<T>(props);
  return (
    <button
      aria-label={props.ariaLabel}
      onClick={(e) => props.onClick(e)}
      className={style}
    >
      <p className="antialiased">{props.text}</p>
    </button>
  );
}
