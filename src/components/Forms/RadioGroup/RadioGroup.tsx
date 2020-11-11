import React from 'react'
import { PropsType } from './types'
import { Field, ErrorMessage } from "formik";
import styles from './RadioGroup.module.scss'

const RadioGroup: React.FC<PropsType> = ({ name, title, values, checked }) => {
    return (
        <div className={styles.root}>
            <div>{title}</div>
            {values.map((value) =>

                < label key={value}  >
                    <Field type='radio'
                        name={name}
                        value={value}
                        checked={value === checked} />
                    {value}
                </label>

            )
            }
            <ErrorMessage name={name} component='div' className={styles.error} />
        </div >
    )
}

export default RadioGroup
