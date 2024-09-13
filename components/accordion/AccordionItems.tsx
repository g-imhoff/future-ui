import { useId } from "react";

interface AccordionItemsProps {
  title: string;
  text: string;
}

export default function AccordionItems(
  props: AccordionItemsProps,
): JSX.Element {
  const sectionId: string = useId();

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
      <h2 className="flex justify-around items-center">
        <button onClick={showSection}>{props.title}</button>
      </h2>
      <section id={sectionId} className="hidden">
        {props.text}
      </section>
    </>
  );
}
