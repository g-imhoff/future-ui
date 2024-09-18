import Alert from "../../components/alert/Alert";
import { ChevronLeft } from "../../src/svg/chevron-left";

export default function TestAlert() {
  return (
    <>
      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="top-left"
      />

      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="top-right"
      />

      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="bottom-left"
      />

      <Alert
        text="CEST UNE ALERTE ENFAITE"
        svg={ChevronLeft}
        svgClose={ChevronLeft}
        svgCloseOnClick={() => {}}
        position="bottom-right"
      />
    </>
  );
}
