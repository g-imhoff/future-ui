import Button from "../../components/button/Button";
import IconButton from "../../components/button/IconButton";
import { ChevronLeft } from "../../src/svg/chevron-left";

export default function TestButton() {
  return (
    <>
      <Button
        text="button"
        ariaLabel="test button"
        onClick={() => alert("the button works !")}
      />
      <IconButton
        svg={ChevronLeft}
        svgColor="fill-none stroke-black dark:stroke-white"
        ariaLabel="test icon button"
        onClick={() => alert("the button icon works !")}
      />
    </>
  );
}
