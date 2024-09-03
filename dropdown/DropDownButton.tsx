import Button from "../button/Button";

export interface DropDownButtonProps {
  displayedId: string;
}

export default function DropDownButton(props: DropDownButtonProps) {
  function displayDropDownContent() {
    const DropDownContent = document.getElementById(props.displayedId); 

    if (DropDownContent?.classList.contains("DropDownContentHidden")) {
      DropDownContent?.classList.remove("DropDownContentHidden");
      DropDownContent?.classList.add("DropDownContentShow");
    } else {
      DropDownContent?.classList.remove("DropDownContentShow");
      DropDownContent?.classList.add("DropDownContentHidden");
    }
  }

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <Button text="DropDown" onClick={displayDropDownContent}/>
    </div>
  )
}