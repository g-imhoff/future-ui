import { ComponentsProps, getRadius, getShadow } from "../components";

export interface ButtonProps<T> extends ComponentsProps {
  size?: "xl" | "lg" | "base" | "sm";
  primary?: boolean; 
  secondary?: boolean;
  onClick(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): T; 
}

function getButtonSize(def: string, size?: string) {
  if (size) {
    switch (size) {
      default: 
        return def;
    }
  } else {
    return def;
  }
}

function getButtonColor(def: string, primary?: boolean, secondary?: boolean) {
  if (primary) {
    return "bg-primary";
  } else if (secondary) {
    return "bg-secondary";
  } else {
    return "bg-primary"
  }
}

export default function Button<T>({props} : {props: ButtonProps<T>}) {
  let size: string = getButtonSize("w-20 h-10", props.size);

  let radius: string = getRadius("", props.radius);
  let shadow: string = getShadow("", props.shadow);

  let bgColor: string = getButtonColor("", props.primary, props.secondary); 

  let className: string = props.className !== undefined ? props.className : "";

  return (
    <button onClick={e => props.onClick(e)} 
            className={className + " " + 
                       size + " " + 
                       radius + " " + 
                       shadow + " " +
                       bgColor}
    >

    </button>
  )
}