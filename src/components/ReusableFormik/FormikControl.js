import Input from "./Elements/Input";
import Textarea from "./Elements/Textarea";
function FormikControl({control,...rest}) {
    switch(control){
        case 'input' : return <Input {...rest}/>
        case 'textarea' : return <Textarea {...rest}/>
        case 'select' :
        case 'radio' :
        case 'checkbox' :
        case 'date' :
        default: return null
    }
}

export default FormikControl
