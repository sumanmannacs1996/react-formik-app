import React from 'react';
import {Formik,Form} from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function LoginForm() {
    const initialValues={
        email:'',
        name:'',
        password:''
    }
    const submitHandler=(values,onSubmitProps)=>{
        console.dir(values);
    }
    const validationSchema =yup.object({
        email:yup.string().email('Not valid email format').required("E-mail is required!"),
        name:yup.string().required("Name is required!"),
        password:yup.string().required("Password is required!"),
    })
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        >
        {
            formik=><Form>
                <FormikControl control ='input' name='email' label='E-mail' type ='email' placeholder='example@example.com'/>

                <FormikControl control ='input' name='name' label='Name' type ='text'/>

                <FormikControl control ='input' name='password' label='Password' type ='password'/>
                
                <button type='submit' disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>Submit</button>
            </Form>
        }    
            
        </Formik>
    )
}

export default LoginForm
