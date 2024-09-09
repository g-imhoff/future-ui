import IconButton, { IconButtonProps } from "../button/IconButton";

interface DropDownIconButtonProps extends IconButtonProps {
  displayedId: string;
}

export default function DropDownIconButton(props: DropDownIconButtonProps) {

  function displayDropDownContent(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) : void {
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
    <div className="w-fit h-fit">
      <IconButton
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
        svg={props.svg}
        svgBlack={props.svgBlack}
      />
    </div>
  );
}
