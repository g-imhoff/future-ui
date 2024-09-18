"use client";

import AutoComplete from "../../components/autocomplete/AutoComplete";
import AutoCompleteSearchBar from "../../components/autocomplete/AutoCompleteSearchBar";
import AutoCompleteItems from "../../components/autocomplete/AutoCompleteItems";
import AutoCompleteContent from "../../components/autocomplete/AutoCompleteContent";
import { useState } from "react";
import { ColoredComponentTestProps } from "./testcomponents";

interface ContentType {
  text: string;
  href?: string;
  id: number;
}

interface DataType {
  [key: string]: ContentType;
}

const data: DataType = {
  item1: {
    text: "Matrix",
    id: 1,
  },
  item2: {
    text: "The Dark Knight",
    id: 2,
  },
  item3: {
    text: "Mad Max: Fury Road",
    id: 3,
  },
  item4: {
    text: "Harry Potter",
    id: 4,
  },
  item5: {
    text: "The Lord of the Rings",
    id: 5,
  },
  item6: {
    text: "12 Angry Men",
    id: 6,
  },
  item7: {
    text: "Gone with the Wind",
    id: 7,
  },
  item8: {
    text: "Pulp Fiction",
    id: 8,
  },
};

export default function TestAutoComplete(
  props: ColoredComponentTestProps,
): JSX.Element {
  let [value, setValue] = useState("");
  let [items, setItems] = useState(initItemsValue());

  function initItemsValue() {
    return Object.values(data)
      .slice(0, 5)
      .map((value) => {
        return <AutoCompleteItems hasHoverEffect={true} text={value.text} />;
      });
  }

  function search(value: string) {
    let items: JSX.Element[];
    if (value === "") {
      items = initItemsValue();
    } else {
      items = Object.values(data)
        .map((dataValue) => {
          if (dataValue.text.includes(value)) {
            return (
              <AutoCompleteItems hasHoverEffect={true} text={dataValue.text} />
            );
          } else {
            return <></>;
          }
        })
        .slice(0, 5);
    }
    setItems(items);
  }

  function handleChangeValue(value: string): void {
    setValue(value);
    search(value);
  }
  return (
    <>
      <AutoComplete className={props.className}>
        <AutoCompleteSearchBar
          color={props.color}
          variant={props.variant}
          value={value}
          setValue={handleChangeValue}
          placeholder="Search your project!"
          className="w-full"
        />
        <AutoCompleteContent
          color={props.color}
          variant={props.variant}
          hasHoverEffect={props.hasHoverEffect}
          className="w-[90%] mt-4"
        >
          {items}
        </AutoCompleteContent>
      </AutoComplete>
    </>
  );
}
