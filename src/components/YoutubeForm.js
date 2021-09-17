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
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['','']
}

const submitHandler=(values)=>{
    console.dir(values);
}

const validationSchema =yup.object({
    name:yup.string().required("Required!"),
    email:yup.string().email('Email format is not valid!').required('Required!'),
    channel:yup.string().required('Required!'),
    comments:yup.string().required('Required!'),
    address:yup.string().required('Required!'),
    social:yup.object({
        facebook:yup.string().url("Please enter a valid facebook url").required('Required!'),
        twitter:yup.string().url("Please enter a valid twitter url").required('Required!')
    }),
    phoneNumbers:yup.array().of(
        yup.string().required('').min(10,"Must be 10 digit").required('Required!')
    )
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
                    <label htmlFor='channel'>Channel</label>
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
                            //console.dir(props);
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

                <div className="form-control">
                    <label htmlFor='facebook'>Facebook Url</label>
                    <Field name='social.facebook' id ='facebook' type='url'/>
                    <ErrorMessage name='social.facebook' component={TextError}/>
                </div>
                <div className="form-control">
                    <label htmlFor='twitter'>Twitter Url</label>
                    <Field name='social.twitter' id ='twitter' type='url'/>
                    <ErrorMessage name='social.twitter' component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor='pNumber'>Primary Number</label>
                    <Field name='phoneNumbers[0]' id ='pNumber' type='text'/>
                    <ErrorMessage name='phoneNumbers[0]' component={TextError}/>
                </div>
                <div className="form-control">
                    <label htmlFor='sNumber'>Secondary Number</label>
                    <Field name='phoneNumbers[1]' id ='sNumber' type='text'/>
                    <ErrorMessage name='phoneNumbers[1]' component={TextError}/>
                </div>

                <button type='submit'>Submit</button>
            </Form>
            
        </Formik>
    )
}

export default YoutubeForm
