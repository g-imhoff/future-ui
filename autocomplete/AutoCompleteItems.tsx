interface AutoCompleteItemsProps {
  text: string;
}

export default function AutoCompleteItems(props: AutoCompleteItemsProps) {
  return <li>{props.text}</li>;
}
