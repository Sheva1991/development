import Button from 'components/Button'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { filterType, PropsType } from './types'
import styles from './Filter.module.scss'
import Input from 'components/Forms/Input'
import Select from 'components/Forms/Select'

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}



const FilterForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {

    const submit = (values: filterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {

        onFilterChanged(values)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{ name: '', gender: '', status: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className={styles.field}>
                        <Field
                            name='name'
                            component={Input}
                            label="Name"
                            type='text'
                        />
                    </div>
                    <div className={styles.field}>
                        <Field
                            name='status'
                            component={Select}
                            label="Status"
                        >
                            <option className={styles.option} value="">All</option>
                            <option className={styles.option} value="Active">Active</option>
                            <option className={styles.option} value="Inactive">Inactive</option>
                        </Field>
                    </div>
                    <div className={styles.field}>
                        <Field
                            name='gender'
                            component={Select}
                            label="Gender"
                        >
                            <option className={styles.option} value="">All</option>
                            <option className={styles.option} value="Male">Male</option>
                            <option className={styles.option} value="Female">Female</option>
                        </Field>
                    </div>
                    <Button type='submit' title='Find' disabled={isSubmitting} />
                </Form>
            )}
        </Formik>
    </div>
})

export default FilterForm
