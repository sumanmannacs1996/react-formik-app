import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from '../TextError';

function RadioButton({name,label,options,...rest}) {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}>
             {
                 props=>{
                     const {field} = props;
                     return options.map(p=>
                     <React.Fragment key={p.key}>
                         <input
                         type='radio'
                         id={p.value}
                         {...field}
                         value={p.value}
                         checked={field.value === p.value}
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

export default RadioButton
