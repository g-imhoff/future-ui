import DropDown from "../../components/dropdown/DropDown";
import DropDownItem from "../../components/dropdown/DropDownItem";
import DropDownButton from "../../components/dropdown/DropDownButton";
import DropDownContent from "../../components/dropdown/DropDownContent";
import DropDownIconButton from "../../components/dropdown/DropDownIconButton";
import { ChevronLeft } from "../../src/svg/chevron-left";
import { ColoredComponentTestProps } from "./testcomponents";

export default function TestDropDown(props: ColoredComponentTestProps) {
  return (
    <>
      <DropDown>
        <DropDownButton
          text="dropdown"
          ariaLabel="dropdown button"
          onClick={() => { }}
          color={props.color}
          variant={props.variant}
          hasHoverEffect={props.hasHoverEffect}
          blurProps={props.blurProps}
        />
        <DropDownContent
          className="w-40"
          color={props.color}
          variant={props.variant}
          hasHoverEffect={props.hasHoverEffect}
          blurProps={props.blurProps}
        >
          <DropDownItem href="/1" text="item1" />
          <DropDownItem href="/2" text="item2" />
          <DropDownItem href="/3" text="item3" />
          <DropDownItem href="/4" text="item4" />
        </DropDownContent>
      </DropDown>

      <DropDown>
        <DropDownIconButton
          svg={ChevronLeft}
          svgColor="fill-none stroke-black dark:strock-white"
          ariaLabel="icon dropdown button"
          onClick={() => { }}
          color={props.color}
          variant={props.variant}
          hasHoverEffect={props.hasHoverEffect}
          blurProps={props.blurProps}
        />
        <DropDownContent
          className="w-40"
          color={props.color}
          variant={props.variant}
          hasHoverEffect={props.hasHoverEffect}
          blurProps={props.blurProps}
        >
          <DropDownItem href="/1" text="item1" />
          <DropDownItem href="/2" text="item2" />
          <DropDownItem href="/3" text="item3" />
          <DropDownItem href="/4" text="item4" />
        </DropDownContent>
      </DropDown>
    </>
  );
}
