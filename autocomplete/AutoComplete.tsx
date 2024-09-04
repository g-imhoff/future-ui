import { useState } from "react";
import { ComponentsProps } from "../components";

interface AutoCompleteProps extends ComponentsProps {
  placeholder?: string;
  children: React.ReactNode;
}

export default function AutoComplete(props: AutoCompleteProps) {
  let [searchValue, setSearchValue] = useState("");

  function handlingSearch(value: string) {
    setSearchValue(value);
  }

  return (
    <>
      <div>
        <label htmlFor="SearchBar"></label>
        <input
          type="text"
          name="SearchBar"
          id="AutoCompleteSearchBar"
          placeholder={props.placeholder}
          onChange={(e) => handlingSearch(e.target.value)}
        />
      </div>
      
      <div>
        {props.children}
      </div>
    </>
  );
}
