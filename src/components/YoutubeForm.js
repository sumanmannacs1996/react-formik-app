import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import TextError from './TextError';

const initialValues ={
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
}

const submitHandler=(values)=>{
    console.dir(values);
}

const validationSchema =yup.object({
    name:yup.string().required("Required!"),
    email:yup.string().email('Email format is not valid!').required('Required!'),
    channel:yup.string().required('Required!'),
    comments:yup.string().required('Required!'),
    address:yup.string().required('Required!')
})


function YoutubeForm() {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <Field name='name' id='name' type='text'/>
                    <ErrorMessage name='name' component={TextError}/>
                </div>
                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <Field name='email' id='email' type='email'/>
                    <ErrorMessage name='email'>
                    {
                        errorMsg => <div className='form-error'>{errorMsg}</div>
                    }
                    </ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor='channel'>Name</label>
                    <Field name='channel' id='channel' type='text' placeholder ='Youtube Channel Name....'/>
                    <ErrorMessage name='channel' component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor='comments'>Comments</label>
                    <Field name='comments' id ='comments' as='textarea'/>
                    <ErrorMessage name='comments' component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {props =>{
                            console.dir(props);
                            const {field,form,meta} = props;
                            return(
                            <div>
                                <input {...field} type='text' id ='address'/>
                                {meta.touched && meta.error ?
                                <div className='form-error'>{meta.error}</div>
                                : ''}
                            </div>
                            )
                        }}
                    </Field>
                </div>

                <button type='submit'>Submit</button>
            </Form>
            
        </Formik>
    )
}

export default YoutubeForm
