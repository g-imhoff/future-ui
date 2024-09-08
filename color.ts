export function getColor(color?: "default" | "primary" | "secondary", variant?: "default" | "borderonly" | "blur", blurSize?: "3xl" | "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none"): string {
  if (variant) {
    switch (variant) {
      case "default":
        return getDefaultColor(color);
      case "borderonly":
        return getBorderOnlyColor(color);
      case "blur":  
        return getBlur(blurSize);
    }
  } else {
    return getDefaultColor(color);
  }
}

function getBlur(blurSize?: "3xl" | "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none") {
}

function getBorderOnlyColor(color?: "default" | "primary" | "secondary") {
  let finalColor: string = "";
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

  return finalColor + " border-2";
}

function getDefaultColor(color?: "default" | "primary" | "secondary") {
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

export function getHoverColor(color?: string): string {
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