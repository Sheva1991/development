import React from 'react'
import styles from './Title.module.scss'
import { PropsType } from './types';

const Title: React.FC<PropsType> = ({ title }) => {
    return (
        <h1 className={styles.root}>{title}</h1>
    )
}

export default Title
