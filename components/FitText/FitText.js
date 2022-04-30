import { useEffect, useRef } from "react";
import styles from "./FitText.module.css";

const SCALE = 0.9;

/**
 * tries to fit child on one line by dynamically calculating font size based on innerText.length
 * @param {string} children
 */
function FitText({ children }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty("--width", ref.current.offsetWidth + "px"); //include units!
      ref.current.style.setProperty("--length", ref.current.innerText.length);
      ref.current.style.setProperty("--scale", SCALE);
    }
  });

  return (
    <div ref={ref} className={styles.fitText}>
      {children}
    </div>
  );
}

export default FitText;
