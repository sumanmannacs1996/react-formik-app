import Input from "./Elements/Input"
function FormikControl({control,...rest}) {
    switch(control){
        case 'input' : return <Input {...rest}/>
        case 'textarea' :
        case 'select' :
        case 'radio' :
        case 'checkbox' :
        case 'date' :
        default: return null
    }
}

export default FormikControl
