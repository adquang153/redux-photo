import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Label } from 'reactstrap';
import RandomPhoto from '../../random-photo';

export default function RandomPhotoField(props) {
    const { field, label, form } = props;
    const { name, value } = field;

    const handleImgChange = (url) => {
        form.setFieldValue(name, url);
    }

    return (
        <FormGroup>
            <Label>{label}</Label>
            <RandomPhoto
                value={value}
                onChangeImgUrl={handleImgChange}
            />
        </FormGroup>
    )
}
