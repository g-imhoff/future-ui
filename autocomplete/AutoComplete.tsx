interface AutoCompleteProps {
  children: React.ReactNode;
}

export default function AutoComplete(props: AutoCompleteProps) {
  return <div className="w-1/2 h-fit">{props.children}</div>;
}
