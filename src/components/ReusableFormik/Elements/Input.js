import React from 'react'
import {Field,ErrorMessage} from 'formik';
import TextError from '../TextError';

function Input({label,name,control,...rest}) {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id ={name} name={name} {...rest} type='text'/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Input
