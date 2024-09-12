import { useId } from "react";
import Button, { ButtonProps } from "../button/Button";

interface DropDownButtonProps extends ButtonProps {
  displayedId: string;
}

export default function DropDownButton(props: DropDownButtonProps) {
  const id: string = props.id ? props.id : useId();

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
      <Button
        className={props.className}
        radius={props.radius}
        shadow={props.shadow}
        color={props.color}
        variant={props.variant}
        blurProps={props.blurProps}
        hasHoverEffect={props.hasHoverEffect}
        text={props.text}
        ariaLabel={props.ariaLabel}
        size={props.size}
        onClick={displayDropDownContent}
      />
    </div>
  );
}
