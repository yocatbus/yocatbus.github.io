import React from 'react';
import styles from './NoPageContent.module.css';
import Img404 from '../img/404op3.png'


const NoPageContent = () => {
  return (
    <div className={styles.noPageContent}>
        <div className={styles.text404}>
            <h2 className={styles.header}>ERROR 404</h2>
            <p className={styles.text}>This is not the page you're looking for!</p>
        </div>
        <div className={styles.img404}>
            <img className={styles.img} src={Img404}/>
        </div>
    </div>
  );
};

export default NoPageContent;
