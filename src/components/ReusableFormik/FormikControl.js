import Input from "./Elements/Input";
import Textarea from "./Elements/Textarea";
import Select from "./Elements/Select";
function FormikControl({control,...rest}) {
    switch(control){
        case 'input' : return <Input {...rest}/>
        case 'textarea' : return <Textarea {...rest}/>
        case 'select' : return <Select {...rest}/>
        case 'radio' :
        case 'checkbox' :
        case 'date' :
        default: return null
    }
}

export default FormikControl
