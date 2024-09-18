import Button from "../../components/button/Button";
import TestAlert from "./TestAlert";
import TestAccordion from "./TestAccordion";

export default function TestMain() {
  function handleDarkMode() {
    const element = document.getElementById("root");

    if (element) {
      if (element.classList.contains("dark")) {
        element.classList.remove("dark");
      } else {
        element.classList.add("dark");
      }
    }
  }

  return (
    <>
      <Button
        className="absolute mt-4 left-1/2 -translate-x-1/2"
        text="Dark"
        ariaLabel="Dark mode button"
        onClick={() => handleDarkMode()}
      />
      <div className="h-screen w-screen flex justify-center items-center">
        <TestAccordion />
      </div>
      <div className="h-screen w-screen flex justify-center items-center relative">
        <TestAlert />
      </div>
      <div className="h-screen w-screen flex justify-center items-center"></div>
    </>
  );
}
