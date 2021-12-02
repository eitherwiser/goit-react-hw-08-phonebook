import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/contacts-operations"
import s from "./Form.module.css";
//


const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  const handleOnChange = (e) => {
    const { type, value } = e.target;
    switch(type) {
      case 'text':
        setName(value);
        break;
      
      case 'tel':
        setNumber(value);
        break;
      
      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = (e) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`"${name}" is already in your phonebook.`)
      return;
    } else if (contacts.some(contact => contact.number === number)) {
      alert(`Person with number "${number}" is already in your phonebook.`)
      return;
    }
      else if (contacts.some(contact => contact.email === email)) {
      alert(`Person with E-mail "${email}" is already in your phonebook.`)
      return;
    }
    dispatch(addContact({ name, number, email }))
    setName('');
    setNumber('');
    setEmail('');
    e.preventDefault();
  };

  return (
    <div>
        <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            X
          </button>
          </label>

                <label className={s.label}>
          E-mail &nbsp;
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
          Number &nbsp;
          <input
            className={s.input}
            type="tel"
            onChange={handleOnChange}
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button onClick={() => setNumber('')} className={`${s.reset_btn}`} type="button">
            X
          </button>
        </label>

        <button className={`${s.submit__btn} ${ s.btn}`} type="onSubmit">
            Add contact
          </button>
        </form>
    </div>
    
  );
}

export default ContactForm;

