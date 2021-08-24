import React from 'react'
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

export default function index(props) {
    const { field, placeholder, disabled, type, label, form: { touched, errors } } = props;
    const { name } = field;
    const msgErr = touched[name] && errors[name];

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input id={name} {...field} placeholder={placeholder} disabled={disabled} type={type} invalid={msgErr} />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}
