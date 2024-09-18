import { BlurProps } from "../../components";

export interface BasicTestProps {
  className?: string;
}

export interface ColoredComponentTestProps extends BasicTestProps {
  color?: "default" | "primary" | "secondary";
  variant?: "default" | "borderonly" | "blur" | "soft";
  blurProps?: BlurProps;
  hasHoverEffect?: boolean;
}
