import styles from "./TrustList.module.css";

export default function TrustList() {
  const items = [
    "Factory finish preserved",
    "Insurance-friendly",
    "Fast turnaround",
  ];

  return (
    <ul className={styles.trustList}>
      {items.map((text, i) => (
        <li key={i} className={styles.trustItem}>
          <span className={styles.bullet} />
          <span className={styles.text}>{text}</span>
        </li>
      ))}
    </ul>
  );
}
