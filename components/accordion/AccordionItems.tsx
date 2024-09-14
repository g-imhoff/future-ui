import { useId } from "react";
import { ChevronLeft } from "../../src/svg/chevron-left";

interface AccordionItemsProps {
  title: string;
  text: string;
  altChevron?: string;
}

export default function AccordionItems(
  props: AccordionItemsProps,
): JSX.Element {
  const sectionId: string = useId();
  const chevronId: string = useId();

  function showSection(): void {
    const section = document.getElementById(sectionId);
    const chevron = document.getElementById(chevronId);

    if (section?.classList) {
      if (section.classList.contains("hidden")) {
        section.classList.add("block");
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
        section.classList.remove("block");
      }
    }

    if (chevron?.classList) {
      if (chevron.classList.contains("-rotate-90")) {
        chevron.classList.remove("-rotate-90");
      } else {
        chevron.classList.add("-rotate-90");
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
        <ChevronLeft
          id={chevronId}
          className="w-6 fill-none stroke-default-500 stroke-width stroke-[1.5] transition-transform duration-300"
        />
      </button>
      <section id={sectionId} className="hidden pb-4">
        {props.text}
      </section>
    </>
  );
}
