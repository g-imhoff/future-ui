import { BlurProps } from "./components";

export function getColor(
  hasHoverEffect: boolean,
  color?: "default" | "primary" | "secondary",
  variant?: "default" | "borderonly" | "blur",
  blurProps?: BlurProps,
): string {
  if (variant) {
    switch (variant) {
      case "default":
        return hasHoverEffect
          ? getDefaultColor(color) + " " + getDefaultHoverColor(color)
          : getDefaultColor(color);
      case "borderonly":
        return hasHoverEffect
          ? getBorderOnlyColor(color) + " " + getHoverBorderOnlyColor(color)
          : getBorderOnlyColor(color);
      case "blur":
        return getBlur(blurProps);
      default:
        return hasHoverEffect
          ? getDefaultColor(color) + " " + getDefaultHoverColor(color)
          : getDefaultColor(color);
    }
  } else {
    return hasHoverEffect
      ? getDefaultColor(color) + " " + getDefaultHoverColor(color)
      : getDefaultColor(color);
  }
}

function getBlur(props?: BlurProps): string {
  let blurSize: string = "";
  let saturation: string = "";
  if (props) {
    if (props.blurSize) {
      switch (props.blurSize) {
        case "3xl":
          blurSize = "backdrop-blur-3xl";
          break;
        case "2xl":
          blurSize = "backdrop-blur-2xl";
          break;
        case "xl":
          blurSize = "backdrop-blur-xl";
          break;
        case "lg":
          blurSize = "backdrop-blur-lg";
          break;
        case "md":
          blurSize = "backdrop-blur-md";
          break;
        case "base":
          blurSize = "backdrop-blur";
          break;
        case "sm":
          blurSize = "backdrop-blur-sm";
          break;
        case "none":
          blurSize = "backdrop-blur-none";
          break;
        default:
          blurSize = "backdrop-blur";
          break;
      }
    } else {
      blurSize = "backdrop-blur";
    }

    if (props.saturation) {
      switch (props.saturation) {
        case "0":
          saturation = "backdrop-saturate-0";
          break;
        case "50":
          saturation = "backdrop-saturate-50";
          break;
        case "100":
          saturation = "backdrop-saturate-100";
          break;
        case "150":
          saturation = "backdrop-saturate-150";
          break;
        case "200":
          saturation = "backdrop-saturate-200";
          break;
        default:
          saturation = "backdrop-saturate-200";
          break;
      }
    } else {
      saturation = "backdrop-saturate-150";
    }
  }

  return blurSize + " " + saturation;
}

function getBorderOnlyColor(color?: "default" | "primary" | "secondary") {
  let finalColor: string = "";
  if (color) {
    switch (color) {
      case "default":
        finalColor =
          "border-default-100 text-black dark:border-default-800 text-black dark:text-white";
        break;
      case "primary":
        finalColor = "border-primary-500 text-primary-500";
        break;
      case "secondary":
        finalColor = "border-secondary-500 text-secondary-500";
        break;
      default:
        finalColor =
          "border-default-100 text-black dark:border-default-800 text-black dark:text-white";
        break;
    }
  } else {
    finalColor =
      "border-default-100 text-black dark:border-default-800 text-black dark:text-white";
  }

  return finalColor + " border-2";
}

function getHoverBorderOnlyColor(
  color?: "default" | "primary" | "secondary",
): string {
  let finalColor: string = "";
  if (color) {
    switch (color) {
      case "default":
        finalColor = "hover:border-default-200 dark:hover:border-default-700";
        break;
      case "primary":
        finalColor = "hover:border-primary-400";
        break;
      case "secondary":
        finalColor = "hover:border-secondary-400";
        break;
      default:
        finalColor = "hover:border-default-200 dark:hover:border-default-700";
        break;
    }
  } else {
    finalColor = "hover:border-default-200 dark:hover:border-default-700";
  }

  return finalColor;
}

function getDefaultColor(color?: "default" | "primary" | "secondary"): string {
  let colorStyle: string = "";
  if (color) {
    switch (color) {
      case "default":
        colorStyle =
          "bg-default-100 dark:bg-default-800 text-black dark:text-white";
        break;
      case "primary":
        colorStyle = "bg-primary-500 text-white";
        break;
      case "secondary":
        colorStyle = "bg-secondary-500 text-white";
        break;
      default:
        colorStyle =
          "bg-default-100 dark:bg-default-800 text-black dark:text-white";
        break;
    }
  } else {
    colorStyle =
      "bg-default-100 dark:bg-default-800 text-black dark:text-white";
  }

  return colorStyle;
}

export function getDefaultHoverColor(color?: string): string {
  let colorStyle: string = "";
  if (color) {
    switch (color) {
      case "default":
        colorStyle = "hover:bg-default-200 dark:hover:bg-default-700";
        break;
      case "primary":
        colorStyle = "hover:bg-primary-400";
        break;
      case "secondary":
        colorStyle = "hover:bg-secondary-400";
        break;
      default:
        colorStyle = "hover:bg-default-200 dark:hover:bg-default-700";
        break;
    }
  } else {
    colorStyle = "hover:bg-default-200 dark:hover:bg-default-700";
  }

  return colorStyle + " transition-colors duration-300";
}
