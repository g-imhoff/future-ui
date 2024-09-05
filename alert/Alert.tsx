import { ComponentsProps } from "../components";

interface AlertProps extends ComponentsProps {
  type: "fail" | "success" | "warning";
  text: string;
  size?: "xl" | "lg" | "md" | "base" | "sm";
}

export default function Alert(props: AlertProps) {
  return (

  )
}