import React, { memo, useEffect, useMemo } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import Title from 'components/Title';
import styles from './PostForm.module.scss'
import { FormValues, PropsType } from './types';
import Button from 'components/Button';
import Input from "components/Forms/Input";
import ErrorField from "components/Forms/ErrorField";
import Textarea from 'components/Forms/Textarea';




const PostForm: React.FC<PropsType> = memo(({ action, data }) => {

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
                user_id: data ? data.user_id : '', title: data ? data.title : '',
                body: data ? data.body : ''
            }}
            validationSchema={Yup.object().shape({
                user_id: Yup.string().min(1).required("User_id is required"),
                title: Yup.string().min(3).max(25).required("Title is required"),
                body: Yup.string().min(20).max(440).required("Body is required"),
            })}
            onSubmit={submit}
        >
            {({ isSubmitting, isValid }) => (
                <div className={styles.root}>
                    <Title title={data ? 'Редактирование статьи' : 'Создание статьи'} />
                    <Form className={styles.form}>
                        <div className={styles.field}>
                            <Field
                                name='user_id'
                                component={Input}
                                label="Id пользователя"
                                type='text'
                            />
                            <ErrorMessage name='user_id' component={ErrorField} />
                        </div>
                        <div className={styles.field}>
                            <Field
                                name='title'
                                component={Input}
                                label="Название"
                                type='text'
                            />
                            <ErrorMessage name='title' component={ErrorField} />
                        </div>
                        <div className={styles.field}>
                            <Field
                                name='body'
                                component={Textarea}
                                label="Содержание"
                                type='text'
                            />
                            <ErrorMessage name='body' component={ErrorField} />
                        </div>
                        <Button type='submit' title={data ? 'Edit' : 'Create'} disabled={isSubmitting || !isValid} />
                    </Form>

                </div>
            )}
        </Formik>
    </div>
})

export default PostForm

