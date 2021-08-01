import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from '../assets/scss/CardSkeleton.module.scss';

const CardSkeleton = () => {
    return (
        <div className={styles.card}>
            <Skeleton variant="rect" className={styles.img} />
            <div className={styles.details}>
                <Skeleton className={styles.title} variant="text" />
                <Skeleton className={styles.year} variant="text" />
                <ul className={styles.ul}>
                    <li className={styles.genre}><Skeleton className={styles.text} variant="text" /></li>
                    <li className={styles.genre}><Skeleton className={styles.text} variant="text" /></li>
                </ul>
            </div>

        </div>
    );
}
export default CardSkeleton;