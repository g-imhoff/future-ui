import { useId } from "react";
import { ChevronLeft } from "../../src/svg/chevron-left";
import "../../src/style/animation.css";

interface AccordionItemsProps {
  title: string;
  text: string;
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
      if (section.classList.contains("TopApparitionHidden")) {
        section.classList.add("TopApparitionShow");
        section.classList.remove("TopApparitionHidden");
      } else {
        section.classList.add("TopApparitionHidden");
        section.classList.remove("TopApparitionShow");
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
    <div className="w-full overflow-y-hidden p-4 relative">
      <button
        className="w-full flex justify-between items-center"
        onClick={showSection}
      >
        <h2 className="subpixel-antialiased">{props.title}</h2>
        <ChevronLeft
          id={chevronId}
          className="w-6 fill-none stroke-black/20 dark:stroke-white/20 stroke-width stroke-[1.5] transition-transform duration-300"
        />
      </button>
      <div id={sectionId} className="TopApparitionHidden">
        <section className="overflow-hidden subpixel-antialiased">
          {props.text}
        </section>
      </div>
    </div>
  );
}
