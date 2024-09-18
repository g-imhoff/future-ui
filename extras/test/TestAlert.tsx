import Alert from "../../components/alert/Alert";
import { ChevronLeft } from "../../src/svg/chevron-left";
import { BasicTestProps } from "./testcomponents";

interface AlertTestProps extends BasicTestProps {
  type?: "failed" | "success" | "warning";
}

export default function TestAlert(props: AlertTestProps) {
  return (
    <>
      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="top-left"
        type={props.type}
        className={props.className}
      />

      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="top-right"
        type={props.type}
        className={props.className}
      />

      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="bottom-left"
        type={props.type}
        className={props.className}
      />

      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="bottom-right"
        type={props.type}
        className={props.className}
      />
    </>
  );
}
