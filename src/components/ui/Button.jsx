import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/* variant: solid | outline | light   (light = for use on navy) */
export default function Button({
  to,
  href,
  variant = "solid",
  children,
  ...rest
}) {
  const className = `${styles.btn} ${styles[variant]}`;

  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
