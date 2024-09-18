import Accordion from "../../components/accordion/Accordion";
import AccordionItems from "../../components/accordion/AccordionItems";
import { BasicTestProps } from "./testcomponents";

export default function TestAccordion(props: BasicTestProps) {
  return (
    <Accordion
      color={props.color}
      variant={props.variant}
      blurProps={props.blurProps}
      hasHoverEffect={props.hasHoverEffect}
    >
      <AccordionItems title="Accordion1" text="This is the accordion1" />
      <AccordionItems title="Accordion2" text="This is the accordion2" />
      <AccordionItems title="Accordion3" text="This is the accordion3" />
      <AccordionItems title="Accordion4" text="This is the accordion4" />
    </Accordion>
  );
}
