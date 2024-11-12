import { ReactNode } from "react";
import Link from "next/link";
import styles from "./RedirectButton.module.css";

interface RedirectButtonProps {
  href: string;
  icon: ReactNode;
  text: string;
  download?: boolean;
}

export default function RedirectButton({
  href,
  icon,
  text,
  download = false,
}: RedirectButtonProps) {
  const buttonContent = (
    <button className={styles.redirectButtonPushable} role="button">
      <span className={styles.redirectButtonShadow}></span>
      <span className={styles.redirectButtonEdge}></span>
      <span className={`${styles.redirectButtonFront} text`}>
        {icon}
        {text}
      </span>
    </button>
  );

  if (download) {
    return (
      <a href={href} download>
        {buttonContent}
      </a>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return <Link href={href}>{buttonContent}</Link>;
}
