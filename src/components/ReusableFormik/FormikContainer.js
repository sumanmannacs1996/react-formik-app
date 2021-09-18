import React from 'react';
import {Formik,Form} from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
    const checkboxOptions =[
        {key:'Option 1', value:'cOption1'},
        {key:'Option 2', value:'cOption2'},
        {key:'Option 3', value:'cOption3'},
        {key:'Option 4', value:'cOption4'},
        {key:'Option 5', value:'cOption5'},
    ]
    const radioOptions =[
        {key:'Option 1', value:'rOption1'},
        {key:'Option 2', value:'rOption2'},
        {key:'Option 3', value:'rOption3'},
        {key:'Option 4', value:'rOption4'},
        {key:'Option 5', value:'rOption5'},
    ]
    const dropdownOptions =[
        {key:'Select an options', value:''},
        {key:'Option 1', value:'option1'},
        {key:'Option 2', value:'option2'},
        {key:'Option 3', value:'option3'},
        {key:'Option 4', value:'option4'},
        {key:'Option 5', value:'option5'},
    ]
    const initialValues={
        email:'',
        comments:'',
        selectOption:'',
        radioOption:'',
        checkboxOption:[]
    }
    const submitHanler=(values)=>{
        console.dir(values);
    }
    const validationSchema= yup.object({
        email:yup.string().email('Not an email format!').required("Required!"),
        comments:yup.string().min(5,'Minumum 5 character!').required("Require!"),
        selectOption:yup.string().required('Please select an option!'),
        radioOption:yup.string().required('Please select one of them!'),
        checkboxOption:yup.array().min(1,'At least one box must be ticked'),
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

                <FormikControl control='textarea' name='comments' label='Comments'/>

                <FormikControl control='select' name='selectOption' label='Select A Topic' options={dropdownOptions}/>

                <FormikControl control='radio' name='radioOption' label='Radio Topic' options={radioOptions}/>

                <FormikControl control='checkbox' name='checkboxOption' label='Checkbox Topic' options={checkboxOptions}/>

                <button type='submit'>Submit</button>
            </Form>
        }    
        </Formik>
    )
}

export default FormikContainer
