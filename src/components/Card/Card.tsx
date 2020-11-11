import React from 'react'
import styles from './Card.module.scss'
import { CardProps } from './types';
import Link from 'components/Link';


const Card: React.FC<CardProps> = ({ data, link }) => (
    <ul className={styles.root}>
        {data.map(
            ({ key, label, value }) => (
                <li key={key} className={styles.item}>{label}: {value}</li>
            )
        )}
        {link && (
            <li className={styles.lastItem}>
                <Link title='Подробнее' link={link} />
            </li>
        )}

    </ul>
)

export default Card
