import { AbsolutePositionProps } from "./position";

export function getHideDynamicAbsolutePosition(
  position: AbsolutePositionProps,
  normal: string,
  center: string,
  middle: string,
): string {
  if (position === "bottom-center" || position === "top-center") {
    return center;
  } else if (position === "left-middle" || position === "right-middle") {
    return middle;
  }

  return normal;
}

export function getShowDynamicAbsolutePosition(
  position: AbsolutePositionProps,
  normal: string,
  center: string,
  middle: string,
): string {
  if (position === "bottom-center" || position === "top-center") {
    return center;
  } else if (position === "left-middle" || position === "right-middle") {
    return middle;
  }

  return normal;
}
