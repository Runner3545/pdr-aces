import styles from "./PageWrapper.module.css";

export default function PageWrapper({
  children,
  className = "",
  container = true,
}) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={container ? styles.container : ""}>{children}</div>
    </div>
  );
}
