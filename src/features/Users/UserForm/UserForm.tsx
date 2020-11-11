import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import Title from 'components/Title';
import { FormValues, PropsType } from './types';
import Button from 'components/Button';
import Input from "components/Forms/Input";
import ErrorField from "components/Forms/ErrorField";
import RadioGroup from 'components/Forms/RadioGroup/RadioGroup';
import styles from './UserForm.module.scss'




const UserForm: React.FC<PropsType> = memo(({ action, data }) => {

    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    const submit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await action(values, data?.id)
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    useEffect(
        () => {
            mountState.mounted = true;
            return () => {
                mountState.mounted = false;
            }
        },
        [mountState]
    )

    return <div>
        <Formik
            initialValues={{
                id: data?.id,
                email: data ? data.email : '', name: data ? data.name : '',
                gender: data ? data.gender : '', status: data ? data.status : ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Email not valid")
                    .required("Email is required"),
                name: Yup.string().min(3).max(20).required("Name is required"),
                status: Yup.string().required("Status is required"),
                gender: Yup.string().required("Gender is required")
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid, values }) => (
                <div className={styles.root}>
                    <Title title={data ? 'Редактирование пользователя' : 'Создание пользователя'} />
                    <Form className={styles.form}>
                        <div className={styles.field}>
                            <Field
                                name='name'
                                component={Input}
                                label="Name"
                                type='text'
                            />
                            <ErrorMessage name='name' component={ErrorField} />
                        </div>
                        <div className={styles.field}>
                            <Field
                                name='email'
                                component={Input}
                                label="Email"
                                type='email'
                            />
                            <ErrorMessage name='email' component={ErrorField} />
                        </div>
                        <RadioGroup title='Status' name='status' values={['Active', 'Inactive']} checked={values.status} />
                        <RadioGroup title='Gender' name='gender' values={['Male', 'Female']} checked={values.gender} />
                        <Button type='submit' title={data ? 'Edit' : 'Create'} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default UserForm

