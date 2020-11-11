import Button from 'components/Button'
import Input from 'components/Forms/Input'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { FilterType, PropsType } from './types'
import styles from './Filter.module.scss'

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}



const FilterForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {

    const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {

        onFilterChanged(values)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{ userId: '', title: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className={styles.field}>
                        <Field
                            name='userId'
                            component={Input}
                            label="UserId"
                            type='text'
                        />
                    </div>
                    <div className={styles.field}>
                        <Field
                            name='title'
                            component={Input}
                            label="Название"
                            type='text'
                        />
                    </div>
                    <Button type='submit' title='Find' disabled={isSubmitting} />
                </Form>
            )}
        </Formik>
    </div>
})

export default FilterForm
