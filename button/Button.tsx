import { ComponentsProps, getRadius, getShadow } from "../components";

export interface ButtonProps<T> extends ComponentsProps {
  size: "xl" | "lg" | "base" | "sm";
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

export default function Button<T>({props} : {props: ButtonProps<T>}) {
  let size: string = getButtonSize("", props.size);

  let radius: string = getRadius("", props.radius);
  let shadow: string = getShadow("", props.shadow);
  let className: string = props.className !== undefined ? props.className : "";

  return (
    <button onClick={e => props.onClick(e)} 
            className={className + " " + 
                       size + " " + 
                       radius + " " + 
                       shadow}
    >

    </button>
  )
}