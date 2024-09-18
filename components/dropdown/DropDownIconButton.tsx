import IconButton, { IconButtonProps } from "../button/IconButton";
import { useId } from "react";

export default function DropDownIconButton(props: IconButtonProps) {
  const hookId: string = useId();
  const id: string = props.id ? props.id : hookId;

  function displayDropDownContent(
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    const DropDownContent = document.getElementById(id);

    if (DropDownContent?.classList.contains("dynamicShow")) {
      DropDownContent?.classList.remove("dynamicShow");
      DropDownContent?.classList.add("dynamicHide");
    } else {
      DropDownContent?.classList.remove("dynamicHide");
      DropDownContent?.classList.add("dynamicShow");
    }

    props.onClick(e);
  }

  return (
    <div id={id} className="peer w-fit h-fit dynamicHide">
      <IconButton
        className={props.className}
        radius={props.radius}
        shadow={props.shadow}
        color={props.color}
        variant={props.variant}
        blurProps={props.blurProps}
        hasHoverEffect={props.hasHoverEffect}
        ariaLabel={props.ariaLabel}
        size={props.size}
        onClick={displayDropDownContent}
        svg={props.svg}
        svgColor={props.svgColor}
      />
    </div>
  );
}
