import { useState } from "react";
import { useDispatch } from "react-redux";

import { logIn } from "redux/auth/auth-operations";
import s from "./LoginForm.module.css";
//


const LoginForm = () => {
  
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value);
        break;
      
        case 'password':
        setPassword(value);
        break;
      
      default:
        break;
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    setPassword('');
    setEmail('');
  }

  const onSubmit = (e) => {
      dispatch(logIn({ email, password }));
      resetForm(e);
  };


  return (
    <div className={s.form_wrapper}>
      <div className={s.logo__wrapper}>
        <span className={s.logo}>Phonebook</span>
      </div>
      <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>
          E-mail  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className={s.input}
            type="email"
            onChange={handleOnChange}
            name="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Example: bob.pupkin@somemail.com"
            required
          />
          <button onClick={() => setEmail('')} className={`${s.reset_btn}`} type="button">
            X
          </button>
        </label>
  
        <label className={s.label}>
          Password &nbsp;
          <input
            className={s.input}
            type="password"
            onChange={handleOnChange}
            name="password"
            value={password}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <button onClick={() => setPassword('')} className={`${s.reset_btn}`} type="button">
            X
          </button>
        </label>

        <button className={`${s.submit__btn} ${ s.btn}`} type="onSubmit">
            Login
        </button>
      </form>
    </div>
    
  );
}

export default LoginForm;