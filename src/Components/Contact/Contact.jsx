import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [showProgress, setShowProgress] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowProgress(true);
    } else {
      setShowProgress(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sadalgekarshravan@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shravan-sadalgekar-942385267/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Shravan21105">Github</a>
        </li>
      </ul>

      {showProgress && (
        <div id="progress" className={styles.progress} onClick={scrollToTop}>
          <span id="progress-value" className={styles.progressValue}>
            <i className='bx bxs-chevrons-up'></i>
          </span>
        </div>
      )}
    </footer>
  );
};
