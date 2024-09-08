export function getRadius(radius?: "full" | "3xl" | "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none"): string {
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