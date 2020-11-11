import React from 'react'
import { PropsType } from './types'
import { FieldProps } from "formik";
import styles from './Input.module.scss'

const Input: React.FC<PropsType & FieldProps> = ({
    label,
    className,
    field
}) => {
    return (
        <div className={className}>
            <label>
                {label && <div className={styles.label}>{label}</div>}
                <input {...field} type='text' className={styles.input} />
            </label>
        </div>
    )
}

export default Input
