import { ShadowProps } from "./components";

export function getShadow(shadow?: ShadowProps): string {
  let shadowColor: string = "";
  let shadowSize: string = "";

  if (shadow) {
    if (shadow.color) {
      switch (shadow.color) {
        case "primary":
          shadowColor = "shadow-primary-800/20 dark:shadow-primary-200/20";
          break;
        case "secondary":
          shadowColor = "shadow-secondary-800/20 dark:shadow-secondary-200/20";
          break;
      }
    }

    if (shadow.size) {
      switch (shadow.size) {
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
  } else {
    shadowSize = "shadow";
  }

  return shadowColor + " " + shadowSize;
}

export function getHoverShadow(shadow?: ShadowProps) {
  let color: string = "";
  let size: string = "";

  if (shadow) {
    if (shadow.color) {
      switch (shadow.color) {
        case "primary":
          color =
            "hover:shadow-primary-800/20 hover:dark:shadow-primary-200/20";
          break;
        case "secondary":
          color =
            "hover:shadow-secondary-800/20 hover:dark:shadow-secondary-200/20";
          break;
      }
    }

    if (shadow.size) {
      switch (shadow.size) {
        case "2xl":
          size = "hover:shadow-2xl";
          break;
        case "xl":
          size = "hover:shadow-xl";
          break;
        case "lg":
          size = "hover:shadow-lg";
          break;
        case "md":
          size = "hover:shadow-md";
          break;
        case "base":
          size = "hover:shadow";
          break;
        case "sm":
          size = "hover:shadow-sm";
          break;
        case "none":
          return "shadow-none";
        default:
          size = "hover:shadow";
          break;
      }
    } else {
      size = "hover:shadow";
    }
  } else {
    return "hover:shadow";
  }

  return size + " " + color;
}