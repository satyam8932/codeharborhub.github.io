import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollBottomToTop.module.css";

export default function ScrollBottomToTop() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = (): void => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button onClick={scrollToTop} className={styles.scrollToTopButton}>
        <FaArrowUp />
      </button>
    )
  );
}
