import { useState } from "react";
import { useDispatch } from "react-redux";
//import { toast } from 'react-toastify';

import { register } from "redux/auth/auth-operations";
import s from "./RegistrationForm.module.css";
//


const RegistrationForm = () => {
  
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'name':
        setName(value);
        break;
      
      case 'email':
        setEmail(value);
        break;
      
        case 'password':
        setPassword(value);
        break;
      
        case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    setName('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  }

  const onSubmit = (e) => {
    if (password !== confirmPassword) {
        setPassword('');
        setConfirmPassword('');
      return alert(`Password and confirmation do not match`);
    }
    else {
      dispatch(register({ name, email, password }));
      resetForm(e);
    }    
  };


  return (
    <div className={s.form_wrapper}>
      <div className={s.logo__wrapper}>
        <span className={s.logo}>Phonebook</span>
      </div>
        <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className={s.input}
            type="name"
            onChange={handleOnChange}
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button onClick={() => setName('')} className={`${s.reset_btn}`} type="button">
            x
          </button>
          </label>

                <label className={s.label}>
          E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            x
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
            x
          </button>
        </label>

        <label className={s.label}>
          Confirm &nbsp;&nbsp;
          <input
            className={s.input}
            type="password"
            onChange={handleOnChange}
            name="confirmPassword"
            value={confirmPassword}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <button onClick={() => setConfirmPassword('')} className={`${s.reset_btn}`} type="button">
            x
          </button>
        </label>


        <button className={`${s.submit__btn} ${ s.btn}`} type="onSubmit">
            Registration
          </button>
        </form>
    </div>
    
  );
}

export default RegistrationForm;