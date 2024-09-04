import "./style.css";

interface AutoCompleteContentProps {
  children: React.ReactNode;
}

export default function AutoCompleteContent(props: AutoCompleteContentProps) {
  return (
    <ul className="hidden peer-has-[:focus]:AutoCompleteContentShow w-1/2 h-fit absolute right-1/2 left-1/2 -translate-x-1/2 mt-4 bg-blue-400">
      {props.children}
    </ul>
  );
}
