import { BasicProps } from "../components";

interface AutoCompleteProps extends BasicProps {
  children: React.ReactNode;
}

export default function AutoComplete(props: AutoCompleteProps) {
  return (
    <div id={props.id} className={"h-fit px-4 relative " + props.className}>
      {props.children}
    </div>
  );
}
