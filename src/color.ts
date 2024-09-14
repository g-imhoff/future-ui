import { BlurProps } from "../components";

export function getColor(
  hasHoverEffect: boolean | undefined,
  color?: "default" | "primary" | "secondary",
  variant?: "default" | "borderonly" | "blur" | "soft",
  blurProps?: BlurProps,
): string {
  let style: string = "";
  if (variant) {
    switch (variant) {
      case "default":
        style = hasHoverEffect
          ? getDefaultColor(color) +
            " transition-colors duration-300 " +
            getDefaultHoverColor(color)
          : getDefaultColor(color);
        break;
      case "borderonly":
        style = hasHoverEffect
          ? getBorderOnlyColor(color) +
            " transition-colors duration-300 " +
            getHoverBorderOnlyColor(color)
          : getBorderOnlyColor(color);
        break;
      case "blur":
        style = getBlur(blurProps) + " bg-transparent";
        break;
      case "soft":
        let base: string = getBlur(blurProps) + " " + getSoftColor(color);
        style = hasHoverEffect
          ? base + " transition-colors duration-300 " + getHoverSoftColor(color)
          : base;
        break;
      default:
        style = hasHoverEffect
          ? getDefaultColor(color) +
            " transition-colors duration-300 " +
            getDefaultHoverColor(color)
          : getDefaultColor(color);
        break;
    }
  } else {
    style = hasHoverEffect
      ? getDefaultColor(color) +
        " transition-colors duration-300 " +
        getDefaultHoverColor(color)
      : getDefaultColor(color);
  }

  if (color && variant !== "blur" && variant !== "soft") {
    switch (color) {
      case "default":
        if (variant === "borderonly") {
          style += " text-default-800 dark:text-default-100";
          if (hasHoverEffect)
            style += " hover:text-default-700 dark:hover:text-default-300";
        } else style += " text-black dark:text-white";
        break;
      case "primary":
        if (variant === "borderonly") {
          style += " text-primary-500";
          if (hasHoverEffect) style += " hover:text-primary-400";
        } else style += " text-white";
        break;
      case "secondary":
        if (variant === "borderonly") {
          style += " text-secondary-500";
          if (hasHoverEffect) style += " hover:text-secondary-400";
        } else style += " text-white";
        break;
      default:
        if (variant === "borderonly") {
          style += " text-default-800 dark:text-default-100";
          if (hasHoverEffect)
            style += " hover:text-default-700 dark:hover:text-default-300";
        } else style += " text-black dark:text-white";
        break;
    }
  } else if (variant === "blur" || variant === "soft") {
    style += " text-black dark:text-white";
  } else {
    if (variant === "borderonly") {
      style += " text-default-800 dark:text-default-100";
      if (hasHoverEffect)
        style += " hover:text-default-700 dark:hover:text-default-300";
    } else style += " text-black dark:text-white";
  }

  return style;
}
export function getHoverColor(
  color?: "default" | "primary" | "secondary",
  variant?: "default" | "borderonly" | "blur" | "soft",
): string {
  if (variant) {
    switch (variant) {
      case "default":
        return getDefaultHoverColor(color);
      case "borderonly":
        return getHoverBorderOnlyColor(color);
      case "soft":
        return getHoverSoftColor(color);
      default:
        return getDefaultHoverColor(color);
    }
  } else {
    return getDefaultHoverColor(color);
  }
}

export function getSoftColor(
  color?: "default" | "primary" | "secondary",
): string {
  let colorStyle: string = "";
  if (color) {
    switch (color) {
      case "default":
        colorStyle = "bg-white/30 dark:bg-default-800/30";
        break;
      case "primary":
        colorStyle = "bg-primary-500/30";
        break;
      case "secondary":
        colorStyle = "bg-secondary-500/30";
        break;
      default:
        colorStyle = "bg-white/30 dark:bg-default-800/30";
        break;
    }
  } else {
    colorStyle = "bg-white/30 dark:bg-default-800/30";
  }

  return colorStyle;
}

function getHoverSoftColor(
  color?: "default" | "primary" | "secondary",
): string {
  let colorStyle: string = "";
  if (color) {
    switch (color) {
      case "default":
        colorStyle = "hover:bg-default-200/30 dark:hover:bg-default-700/30";
        break;
      case "primary":
        colorStyle = "hover:bg-primary-400/30";
        break;
      case "secondary":
        colorStyle = "hover:bg-secondary-400/30";
        break;
      default:
        colorStyle = "hover:bg-default-200/30 dark:hover:bg-default-700/30";
        break;
    }
  } else {
    colorStyle = "hover:bg-default-200/30 dark:hover:bg-default-700/30";
  }

  return colorStyle;
}

export function getBlur(props?: BlurProps): string {
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
          saturation = "backdrop-saturate-150";
          break;
      }
    } else {
      saturation = "backdrop-saturate-150";
    }
  } else {
    saturation = "backdrop-saturate-150";
    blurSize = "backdrop-blur";
  }

  return blurSize + " text-black dark:text-white " + saturation;
}

export function getBorderOnlyColor(
  color?: "default" | "primary" | "secondary",
) {
  let finalColor: string = "";
  if (color) {
    switch (color) {
      case "default":
        finalColor = "border-default-800 dark:border-default-200";
        break;
      case "primary":
        finalColor = "border-primary-500";
        break;
      case "secondary":
        finalColor = "border-secondary-500";
        break;
      default:
        finalColor = "border-default-800 dark:border-default-200";
        break;
    }
  } else {
    finalColor = "border-default-800 dark:border-default-100";
  }

  return finalColor;
}

function getHoverBorderOnlyColor(
  color?: "default" | "primary" | "secondary",
): string {
  let finalColor: string = "";
  if (color) {
    switch (color) {
      case "default":
        finalColor = "dark:hover:border-default-300 hover:border-default-700";
        break;
      case "primary":
        finalColor = "hover:border-primary-400";
        break;
      case "secondary":
        finalColor = "hover:border-secondary-400";
        break;
      default:
        finalColor = "dark:hover:border-default-300 hover:border-default-700";
        break;
    }
  } else {
    finalColor = "dark:hover:border-default-300 hover:border-default-700";
  }

  return finalColor;
}

export function getDefaultColor(
  color?: "default" | "primary" | "secondary",
): string {
  let colorStyle: string = "";
  if (color) {
    switch (color) {
      case "default":
        colorStyle = "bg-default-100 dark:bg-default-800";
        break;
      case "primary":
        colorStyle = "bg-primary-500";
        break;
      case "secondary":
        colorStyle = "bg-secondary-500";
        break;
      default:
        colorStyle = "bg-default-100 dark:bg-default-800";
        break;
    }
  } else {
    colorStyle = "bg-default-100 dark:bg-default-800";
  }

  return colorStyle;
}

function getDefaultHoverColor(color?: string): string {
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

  return colorStyle;
}
