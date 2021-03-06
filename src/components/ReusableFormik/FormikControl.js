import Input from "./Elements/Input";
import Textarea from "./Elements/Textarea";
import Select from "./Elements/Select";
import RadioButton from "./Elements/RadioButton";
import CheckBox from "./Elements/CheckBox";
import DatePicker from "./Elements/DatePicker";
function FormikControl({control,...rest}) {
    switch(control){
        case 'input' : return <Input {...rest}/>
        case 'textarea' : return <Textarea {...rest}/>
        case 'select' : return <Select {...rest}/>
        case 'radio' : return <RadioButton {...rest}/>
        case 'checkbox' : return <CheckBox {...rest}/>
        case 'date' : return <DatePicker {...rest}/>
        default: return null
    }
}

export default FormikControl
