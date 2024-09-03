/**
 * @interface ComponentsProps
 *
 * This interface defines the standard set of properties (props) that can be applied
 * to all components within the UI kit. By implementing this interface, components
 * maintain consistency in styling and behavior across the entire UI kit.
 *
 * Properties:
 *
 * - @param {string} [className] : A string representing one or more CSS class names
 *   to apply custom styles to the component.
 *
 * - @param {string} [radius] : A string defining the border-radius of the component
 *   for rounded corners. Acceptable values are predefined classes: "full", "3xl",
 *   "2xl", "xl", "lg", "md", "base", "sm", "none".
 *
 * - @param {string} [shadow] : A string representing the box-shadow property to apply
 *   a shadow effect to the component. Acceptable values are predefined classes:
 *   "2xl", "xl", "lg", "md", "base", "sm", "none".
 *
 * - @param {string} [key] : A string or number that uniquely identifies the component
 *   within a list of sibling elements, commonly used in React.
 *
 * All properties are optional. If not provided, the component will apply default
 * styles, typically based on a predefined design system or theme.
 *
 * This interface serves as a blueprint for ensuring that all UI components
 * are designed with a consistent and flexible API.
 */

export interface ShadowProps {
  size?: "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none";
  color?: "default" | "primary" | "secondary";
}

export interface ComponentsProps {
  className?: string;

  radius?: "full" | "3xl" | "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none";
  shadow?: ShadowProps;

  key?: string;
}

export function getRadius(radius?: string): string {
  if (radius) {
    switch (radius) {
      case "full":
        return "rounded-full";
      case "3xl":
        return "rounded-3xl";
      case "2xl":
        return "rounded-2xl";
      case "xl":
        return "rounded-xl";
      case "lg":
        return "rounded-lg";
      case "md":
        return "rounded-md";
      case "base":
        return "rounded";
      case "sm":
        return "rounded-sm";
      case "none":
        return "rounded-none";
      default:
        return "rounded";
    }
  } else {
    return "rounded";
  }
}

export function getShadow(shadow?: string, color?: string): string {
  let shadowColor: string = "";
  let shadowSize: string = "";

  if (color) {
    switch (color) {
      case "primary":
        shadowColor = "shadow-primary-800/20 dark:shadow-primary-200/20";
        break;
      case "secondary":
        shadowColor = "shadow-secondary-800/20 dark:shadow-secondary-200/20";
        break;
    }
  } 
  
  if (shadow) {
    switch (shadow) {
      case "2xl":
        shadowSize = "shadow-2xl";
        break;
      case "xl":
        shadowSize = "shadow-xl";
        break;
      case "lg":
        shadowSize = "shadow-lg";
        break;
      case "md":
        shadowSize = "shadow-md";
        break;
      case "base":
        shadowSize = "shadow";
        break;
      case "sm":
        shadowSize = "shadow-sm";
        break;
      case "none":
        return "shadow-none";
      default:
        shadowSize = "shadow";
        break;
    }
  } else {
    shadowSize = "shadow";
  }

  return shadowColor + " " + shadowSize;
}
