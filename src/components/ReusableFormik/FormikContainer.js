import React from 'react';
import {Formik,Form} from 'formik';
import * as yup from 'yup';

function FormikContainer() {
    const initialValues={}
    const submitHanler=(values)=>{
        console.dir(values);
    }
    const validationSchema= yup.object({})
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={submitHanler}
        validationSchema={validationSchema}
        >
        {
            formik =><Form>
                <button type='submit'>Submit</button>
            </Form>
        }    
        </Formik>
    )
}

export default FormikContainer
