import Button, { ButtonProps } from "../button/Button";

interface DropDownButtonProps extends ButtonProps {
  displayedId: string;
}

export default function DropDownButton(props: DropDownButtonProps) {
  function displayDropDownContent(
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    const DropDownContent = document.getElementById(props.displayedId);

    if (DropDownContent?.classList.contains("DropDownContentHidden")) {
      DropDownContent?.classList.remove("DropDownContentHidden");
      DropDownContent?.classList.add("DropDownContentShow");
    } else {
      DropDownContent?.classList.remove("DropDownContentShow");
      DropDownContent?.classList.add("DropDownContentHidden");
    }

    props.onClick(e);
  }

  return (
    <div id={props.id} className="w-full flex justify-center h-fit">
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
