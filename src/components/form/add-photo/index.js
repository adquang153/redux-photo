import React from 'react'
import { Button, FormGroup, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../libs/constant';
import { Formik, Form, FastField } from 'formik';
import InputField from '../input-field';
import SelectField from '../select-field';
import RandomPhotoField from '../random-photo-field';
import * as Yup from 'yup';

export default function index() {

    const initialValues = {
        title: '',
        photo: '',
        categoryId: '',
    };
    const submitForm = (e) => {
        console.log('submit:', e);
    }

    const validateSchema = Yup.object().shape({
        title: Yup.string().required('Title required'),
        categoryId: Yup.number().required('Category required'),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('Photo required'),
            otherwise: Yup.string().notRequired()
        }),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={validateSchema}
        >
            {formikProps => {

                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });

                return <Form>
                    <FastField
                        name="title"
                        component={InputField}

                        label="Title"
                        placeholder="enter title"
                    />

                    <FastField
                        name="categoryId"
                        component={SelectField}

                        label="category"
                        placeholder="choose category"
                        options={PHOTO_CATEGORY_OPTIONS}
                    />
                    <FastField
                        name="photo"
                        component={RandomPhotoField}

                        label="Photo"
                    />

                    <FormGroup>
                        <Button type="submit">
                            Add
                        </Button>
                    </FormGroup>
                </Form>
            }}
        </Formik>
    )
}
