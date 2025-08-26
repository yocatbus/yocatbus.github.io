import React from 'react';
import styles from './Catbus.module.css';
import CatbusImg from '../img/me.png';

const Catbus = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.catbusHeader}>Hi, my name is Catbus!</h2>
            <p className={styles.aboutText}>Jr Data Engineer and Breaker of Cubes at Bravissimo Ltd.<br/>
                                            My furry partner in crime is called Dizzy.</p>
        </div>
        <img className={styles.catbusImg} src={CatbusImg}/>
    </div>
  );
};

export default Catbus;