import { BlurProps } from "../../components";

export interface BasicTestProps {
  color?: "default" | "primary" | "secondary";
  variant?: "default" | "borderonly" | "blur" | "soft";
  blurProps?: BlurProps;
  hasHoverEffect?: boolean;
}
