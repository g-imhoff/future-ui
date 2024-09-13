import { useId } from "react";
import Image from "next/image";
import Chevron from "../../src/svg/chevron-left.svg";

interface AccordionItemsProps {
  title: string;
  text: string;
  altChevron?: string;
}

export default function AccordionItems(
  props: AccordionItemsProps,
): JSX.Element {
  const sectionId: string = useId();
  const chevronAlt: string = props.altChevron
    ? props.altChevron
    : "the chevron button";

  function showSection(): void {
    const element = document.getElementById(sectionId);

    if (element?.classList) {
      if (element.classList.contains("hidden")) {
        element.classList.add("block");
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
        element.classList.remove("block");
      }
    }
  }

  return (
    <>
      <button
        className="w-full flex justify-between items-center p-4"
        onClick={showSection}
      >
        <h2>{props.title}</h2>
        <Image src={Chevron} alt={chevronAlt} />
      </button>
      <section id={sectionId} className="hidden">
        {props.text}
      </section>
    </>
  );
}
