import { AbsolutePositionProps } from "./position";

export interface DynamicAbsolutePositionValue {
  show: string;
  hide: string;
}

export function getDynamicAbsolutePosition(
  position: AbsolutePositionProps,
): DynamicAbsolutePositionValue {
  let result: DynamicAbsolutePositionValue = {
    show: "peer-[.dynamicShow]:DynamicContentShow",
    hide: "peer-[.dynamicHide]:DynamicContentHidden",
  };
  if (position === "bottom-center" || position === "top-center") {
    result = {
      show: "peer-[.dynamicShow]:DynamicContentShowCenter",
      hide: "peer-[.dynamicHide]:DynamicContentHiddenCenter",
    };
  } else if (position === "left-middle" || position === "right-middle") {
    result = {
      show: "peer-[.dynamicShow]:DynamicContentShowMiddle",
      hide: "peer-[.dynamicHide]:DynamicContentHiddenMiddle",
    };
  }

  return result;
}
