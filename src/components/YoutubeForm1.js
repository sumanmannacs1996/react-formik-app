import React,{useState} from 'react';
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik';
import * as yup from 'yup';
import TextError from './TextError';

function YoutubeForm1() {
    const [formValue,setFormValue] = useState(null);
    const savedValues ={
        name:'Sherlock Holmes',
        email:'detective@exmple.com',
        channel:'Arthur Conan Doyle',
        comments:'Welcome!',
        address:'221b Baker Street',
        social:{
            facebook:'',
            twitter:''
        },
        phoneNumbers:['',''],
        phNumbers:['']
    }
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
        phoneNumbers:['',''],
        phNumbers:['']
    }
    
    const submitHandler=(values,onSubmitProps)=>{
        console.dir(values);
        {
            //Set agin submit button to enable in case api assync called failed so that user can agin try to submit the form
            setTimeout(()=>{
                onSubmitProps.setSubmitting(false);
            },3000)
        }
    
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
            yup.string().min(10,"Must be more then 10 digit").required('Required!')
        ),
        phNumbers:yup.array().of(
            yup.string().min(5,"Must be 5 digit").max(5,"Must be 5 digit").required('Required!')
        )
    })
    
    const validateComments =(value)=>{
        let error
        if(value !== 'My Comments')
            error = 'Please Type => My Comments';
        return error;
    }
    
    //This code will run every time when we interact to the form
    //and in the values property it has access to all attributes value 
    const customValidation=(values)=>{
        console.dir(values);
        let errors ={};
        if(values.comments !== values.channel){
            errors.comments = 'It is not same to Channel Name!';
        }
        return errors;
    }
    return (
        <Formik
        initialValues={formValue || initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        validate ={customValidation}
        enableReinitialize
        >
        {
            formik =>{
                console.dir(formik);
                return(
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
                    <Field name='comments' id ='comments' as='textarea' validate ={validateComments}/>
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

                <div className="form-control">
                    <label htmlFor='sNumber'>Multiples Numbers</label>
                    <FieldArray name='phNumbers'>
                    { props =>{
                        //console.dir(props);
                        const {insert,remove,form} = props;
                        const {values} = form;
                        const {phNumbers} = values;
                        return(
                        <div>
                            {phNumbers.map((p,index)=>
                            <div key={index}>
                                {index > 0 &&
                                 <button onClick={()=>remove(index)}>{ '-' }</button>
                                 }
                                 <Field name={`phNumbers[${index}]`}/>
                                 <button onClick={()=>insert(index+1,'')}>{ '+' }</button>
                                 <ErrorMessage name={`phNumbers[${index}]`} component={TextError}/>
                            </div>
                            )}
                        </div>
                        )
                    }}
                    </FieldArray>
                </div>

                <button type='submit' disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>Submit</button>
                <button onClick={()=>setFormValue(savedValues)}>Load Saved Data</button>
            </Form>
            
                )
            }
        }
        </Formik>
    )
}

export default YoutubeForm1
