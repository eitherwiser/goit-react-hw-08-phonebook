import RegistrationForm from "components/RegistrationForm/RegistarionForm";
import { Link } from "react-router-dom";

import s from './RegistrationPage.module.css';
//


const LoginPage = () => {


  return (
    <>
      <RegistrationForm />
      <div>
        <span className={s.navigation}>Or you can <Link to={'../login'}>sing in</Link> if you already registered.</span>
      </div>      
    </>
  )
};

export default LoginPage;