import './App.css';
import YoutubeForm from './components/YoutubeForm';
import YoutubeForm1 from './components/YoutubeForm1';
import FormikContainer from './components/ReusableFormik/FormikContainer';
import LoginForm from './components/ReusableFormik/LoginForm';
import RegistrationForm from './components/ReusableFormik/RegistrationForm';

function App() {
  return (
    <div className="App">
      {/*<YoutubeForm/> */}
      {/*<YoutubeForm1/> */}
      {/*<FormikContainer/> */}
      {/*<LoginForm/> */}
      <RegistrationForm/>
    </div>
  );
}

export default App;
