import { AbsolutePositionProps } from "./position";

export function getHideDynamicAbsolutePosition(
  position: AbsolutePositionProps,
  prefixHide: string,
): string {
  let result: string = prefixHide + "DynamicContentHidden";

  if (position === "bottom-center" || position === "top-center") {
    result = prefixHide + "DynamicContentHiddenCenter";
  } else if (position === "left-middle" || position === "right-middle") {
    result = prefixHide + "DynamicContentHiddenMiddle";
  }

  return result;
}

export function getShowDynamicAbsolutePosition(
  position: AbsolutePositionProps,
  prefixShow: string,
): string {
  let result: string = prefixShow + "DynamicContentShow";

  if (position === "bottom-center" || position === "top-center") {
    result = prefixShow + "DynamicContentShowCenter";
  } else if (position === "left-middle" || position === "right-middle") {
    result = prefixShow + "DynamicContentShowMiddle";
  }

  return result;
}
