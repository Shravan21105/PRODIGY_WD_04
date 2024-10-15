import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage}
            src={getImageUrl("about/aboutImage.png")} 
            alt="about my image" 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/collegeIcon.png")} alt="College" />
                    <div>
                        <h3 className={styles.aboutItemText}>Computer Science Student</h3><br/>
                        <p>Second year Btech. student persuing Btech in Computer Science from Ramdeobaba College of Enginering and Management.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/frontendIcon.png")} alt="frontend" />
                    <div>
                        <h3 className={styles.aboutItemText}>Frontend Developer</h3><br/>
                        <p>I am a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI" />
                    <div>
                        <h3 className={styles.aboutItemText}>UI designer</h3><br/>
                        <p>I have designed multiple landing pages and have systems as well.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
