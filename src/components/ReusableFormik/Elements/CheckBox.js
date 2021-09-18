import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from '../TextError';

function CheckBox({name,label,options,...rest}) {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}{...rest}>
             {
                 props=>{
                     const {field}=props;
                     return options.map(p=>
                     <React.Fragment key ={p.value}>
                         <input
                         type='checkbox'
                         id={p.value}
                         {...field}
                         value={p.value}
                         checked={field.value.includes(p.value)}
                         />
                         <label htmlFor={p.value} style={{display:'inline'}}>{p.key}</label>
                     </React.Fragment>)
                 }
             }   
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default CheckBox
