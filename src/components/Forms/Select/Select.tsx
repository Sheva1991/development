import React from 'react'
import { PropsType } from './types'
import { FieldProps } from "formik";
import styles from './Select.module.scss'

const Select: React.FC<PropsType & FieldProps> = ({
    label,
    className,
    field,
    children
}) => {
    return (
        <div className={className}>
            <label>
                {label && <div className={styles.label}>{label}</div>}
                <select {...field} className={styles.select} >
                    {children}
                </select>
            </label>
        </div>
    )
}

export default Select
