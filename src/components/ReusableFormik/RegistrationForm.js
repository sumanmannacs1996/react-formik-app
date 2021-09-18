import React from 'react'
import {Formik,Form} from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function RegistrationForm() {
    const radioOptions=[
        {key:'Email',value:'email'},
        {key:'Telephone',value:'telephone'}
    ]
    const initialValues={
        email:'',
        password:'',
        confPassword:'',
        modeOfContact:'',
        phone:''
    }
    const submitHandler=(values,onSubmitProps)=>{
        console.dir(values);
    }
    const validationSchema =yup.object({
        email:yup.string().email('Not valid email format').required("E-mail is required!"),
        password:yup.string().min(8,'Minimum of 8 character').max(15,'Maximum of 15 character').matches(/[a-z]/,"atleast one character must be in lower case").matches(/[A-Z]/,"atleast one character must be in upper case").matches(/[0-9]/,'atleast one character must be number').required("Password is required!"),
        confPassword:yup.string().oneOf([yup.ref('password'),''],"Passwords must match").required('Password is required!'),
        modeOfContact:yup.string().required('Please select the mode of contuct'),
        phone:yup.string().when('modeOfContact',{is:'telephone',then:yup.string().required('Please add the Telephone number')})
    })
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        >
         {
            formik=><Form>
                <FormikControl control='input' name='email' label='E-mail' type='text'/>
                <FormikControl control='input' name='password' label='Password'/>
                <FormikControl control='input' name='confPassword' label='Conform Password'/>
                <FormikControl control='radio' name='modeOfContact' label='Mode Of Contuct' options={radioOptions}/>
                <FormikControl control='input' name='phone' label='Mobile'/>

                <button type='submit' disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>Submit</button>
            </Form>
         }   
        </Formik>
    )
}

export default RegistrationForm
