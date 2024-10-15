import React from 'react'
import { getImageUrl } from "../../utils"; 
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Shravan</h1>
                <p className={styles.description}>I am a front end developer with 2 years of experience using HTML, CSS, JS, React, Tailwind. Reach out if you want to learn more! </p>
                <a href="#contact" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"className={styles.heroImg}/>
                <div className={styles.topBlur}/>
                <div className={styles.buttonBlur}/>
        </section>

    )
}

export default Hero
