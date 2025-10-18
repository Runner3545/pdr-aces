import styles from "./Text.module.css";
import clsx from "clsx";

export default function Text({
  as = "p", // HTML tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'small'
  variant, // optional: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small'
  weight, // optional: 'light' | 'medium' | 'bold'
  align = "left", // optional: 'left' | 'center' | 'right'
  color = "primary", // optional: 'primary' | 'secondary' | 'inverse'
  className = "",
  children,
  ...props
}) {
  const Component = as;
  const appliedVariant = variant || as;

  const textClass = clsx(
    styles.text,
    styles[appliedVariant],
    weight && styles[`weight-${weight}`],
    styles[`align-${align}`],
    styles[`color-${color}`],
    className
  );

  return (
    <Component className={textClass} {...props}>
      {children}
    </Component>
  );
}
