import LoginForm from "components/LoginForm/LoginForm";
import { Link} from "react-router-dom";

import s from './LoginPage.module.css';
//

const LoginPage = () => {


  return (
    <>
      <LoginForm />
            <div>
        <span className={s.navigation}>Or you can <Link to={'../registration'}>create new user</Link> .</span>
      </div>
    </>
  )
};

export default LoginPage;