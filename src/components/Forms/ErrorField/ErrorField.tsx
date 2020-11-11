import React from 'react'
import styles from './ErrorField.module.scss'

const ErrorField: React.FC = ({ children }) => {
    return (
        <div className={styles.root}>{children}</div>
    )
}

export default ErrorField
