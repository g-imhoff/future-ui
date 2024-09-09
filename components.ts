/**
 * @interface ComponentsProps
 *
 * This interface defines the standard set of properties (props) that can be applied
 * to all components within the UI kit. By implementing this interface, components
 * maintain consistency in styling and behavior across the entire UI kit.
 *
 * Properties:
 *
 * - @param {string} [className] : A string representing one or more CSS class names
 *   to apply custom styles to the component.
 *
 * - @param {string} [radius] : A string defining the border-radius of the component
 *   for rounded corners. Acceptable values are predefined classes: "full", "3xl",
 *   "2xl", "xl", "lg", "md", "base", "sm", "none".
 *
 * - @param {string} [shadow] : A string representing the box-shadow property to apply
 *   a shadow effect to the component. Acceptable values are predefined classes:
 *   "2xl", "xl", "lg", "md", "base", "sm", "none".
 *
 * - @param {string} [key] : A string or number that uniquely identifies the component
 *   within a list of sibling elements, commonly used in React.
 *
 * All properties are optional. If not provided, the component will apply default
 * styles, typically based on a predefined design system or theme.
 *
 * This interface serves as a blueprint for ensuring that all UI components
 * are designed with a consistent and flexible API.
 */

export interface ShadowProps {
  size?: "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none";
  color?: "default" | "primary" | "secondary";
}

export interface BlurProps {
  blurSize?: "3xl" | "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none";
  saturation?: "0" | "50" | "100" | "150" | "200";
}

export interface BasicProps {
  className?: string;
  id?: string;
  key?: string;
}

export interface ComponentsProps extends BasicProps {
  radius?: "full" | "3xl" | "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "none";
  shadow?: ShadowProps;
}

export interface ColoredComponentsProps extends ComponentsProps {
  color?: "default" | "primary" | "secondary";
  variant?: "default" | "borderonly" | "blur";
  blurProps?: BlurProps;
}
