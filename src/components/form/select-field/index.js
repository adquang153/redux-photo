import React from 'react'
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

export default function index(props) {
    const { field, placeholder, disabled, options, label, form: { touched, errors } } = props;
    const { name } = field;
    console.log({ touched, errors });
    const handleOnChange = (data) => {
        const value = data ? data.value : data;

        const changeEvent = { target: { name, value } };

        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Select
                id={name}
                onChange={handleOnChange}
                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
            />
            <div className="is-invalid"></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}
