interface AutoCompleteItemsProps {
  text: string;
}

export default function AutoCompleteItems(props: AutoCompleteItemsProps) {
  return <li className="w-auto h-10 flex items-center pl-2 transition-colors duration-300"><p>{props.text}</p></li>;
}
