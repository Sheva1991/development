import React from 'react'
import { PropsType } from './types'
import { FieldProps } from "formik";
import styles from './Textarea.module.scss'

const Textarea: React.FC<PropsType & FieldProps> = ({
    label,
    className,
    field
}) => {
    return (
        <div className={className}>
            <label>
                {label && <div className={styles.label}>{label}</div>}
                <textarea {...field} className={styles.textarea} />
            </label>
        </div>
    )
}

export default Textarea
