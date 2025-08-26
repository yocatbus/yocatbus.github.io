import React from 'react';
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroText}>
            <h1>Hello, World!</h1>
        </div>
    </div>
  );
};

export default Hero;