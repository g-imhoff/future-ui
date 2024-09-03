import { ShadowProps } from "../components";
import IconButton, {IconButtonProps} from "../button/IconButton";

interface DropDownIconButtonProps extends IconButtonProps<void> {
  displayedId: string;
}

export default function DropDownIconButton(props: DropDownIconButtonProps) {
  let shadowStyle: ShadowProps = {
    size: props.shadow?.size,
    color: props.shadow?.color,
  };

  function displayDropDownContent() {
    const DropDownContent = document.getElementById(props.displayedId);

    if (DropDownContent?.classList.contains("DropDownContentHidden")) {
      DropDownContent?.classList.remove("DropDownContentHidden");
      DropDownContent?.classList.add("DropDownContentShow");
    } else {
      DropDownContent?.classList.remove("DropDownContentShow");
      DropDownContent?.classList.add("DropDownContentHidden");
    }

    props.onClick();
  }

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <IconButton
        text={props.text}
        ariaLabel={props.ariaLabel}
        size={props.size}
        color={props.color}
        variant={props.variant}
        onClick={displayDropDownContent}
        className={props.className}
        radius={props.radius}
        shadow={shadowStyle}
        key={props.key}
        svg={props.svg}
        svgBlack={props.svgBlack}
      />
    </div>
  );
}