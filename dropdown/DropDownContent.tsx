import { Children } from "react";
import "./style.css";

export default function DropDownContent({children, contentId} : {children: React.ReactNode, contentId: string}) {
  const itemChildren = Children.map(children, child =>
    <li className="p-2 hover:bg-default-700 rounded-lg">
      {child}
    </li>
  )  

  return (
    <ul id={contentId} className="w-40 bg-default-800 p-4 mt-4 rounded-lg text-white absolute DropDownContentHidden">
      {itemChildren}
    </ul>
  )
}