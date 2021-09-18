import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from '../TextError';

function Select({name,label,options,...rest}) {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id ={name} as='select'{...rest} type='select'>
            {
                options.map(p=><option key={p.value} value={p.value}>{p.key}</option>)
            }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Select
