import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from '../TextError';

function Textarea({name,label,...rest}) {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name} as='textarea' {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Textarea
