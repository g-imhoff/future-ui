import CommandDisplay from "../../components/commanddisplay/CommandDisplay";
import { ColoredComponentTestProps } from "./testcomponents";

export default function TestCommandDisplay(props: ColoredComponentTestProps) {
  return (
    <>
      <CommandDisplay
        className={props.className}
        color={props.color}
        variant={props.variant}
        blurProps={props.blurProps}
        command="⌘⇧N"
      />
      <CommandDisplay command="⌘K" />
      <CommandDisplay command="⌥⌘P" />
    </>
  );
}
