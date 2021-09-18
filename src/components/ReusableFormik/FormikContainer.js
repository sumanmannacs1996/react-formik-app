import React from 'react';
import {Formik,Form} from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
    const initialValues={
        email:''
    }
    const submitHanler=(values)=>{
        console.dir(values);
    }
    const validationSchema= yup.object({
        email:yup.string().email('Not an email format!').required("Required!")
    })
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={submitHanler}
        validationSchema={validationSchema}
        >
        {
            formik =><Form>
                <FormikControl control='input' name='email' label ='E-mail'/>
                <button type='submit'>Submit</button>
            </Form>
        }    
        </Formik>
    )
}

export default FormikContainer
