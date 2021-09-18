import {Field,ErrorMessage} from 'formik';
import TextError from '../TextError';
import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({label,name,...rest}) {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}>
             {
                 props=>{
                     const {field,form} = props;
                     const {setFieldValue} = form;
                     const{value} = field;
                     return <DateView
                            id={name}
                            {...field}
                            selected={value}
                            onChange={val=>setFieldValue(name,val)}
                            />
                 }
             }   
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default DatePicker
