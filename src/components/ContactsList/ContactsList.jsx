import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../../components/Loader/Loader.jsx'

import Filter from '../../components/Filter/Filter.jsx';
import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operations';
import s from "./ContactsList.module.css";
//

    const visibleContacts = (allContacts, filter) => {
      const normalizeFilter = filter.trim().toLowerCase();
      const name = allContacts.filter((contact) => (
        contact.name.toLowerCase().includes(normalizeFilter)))
      const number = allContacts.filter((contact) => (
        contact.number.toLowerCase().includes(normalizeFilter)))
      const email = allContacts.filter((contact) => (
        contact.email.toLowerCase().includes(normalizeFilter)))
      const allResults = [...name, ...number, ...email];
      return [...new Set(allResults)];
    };
//


const ContactsList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => visibleContacts(state.contacts.items, state.contacts.filter));
  const isLoading = useSelector(state => state.contacts.loading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <Filter />
      {!contacts.length && <h4>Contacts list is empty.</h4>}
      {isLoading && <Loader/>}
      {!!contacts.length && 
        <div className={s.table_wrapper}>
        <div className={s.table_wrapper__scroll}>
        <table className={s.table}>
          <caption></caption>
          <thead className={s.table_header}>
          <tr>
            <th><div className={s.table_header__floating_cell} label="Name"></div></th>
            <th><div className={s.table_header__floating_cell} label="Phone number"></div></th>
            <th><div className={s.table_header__floating_cell} label="E-mail"></div></th>
            <th><div className={s.table_header__floating_cell} label="Options"></div></th>
            <th class="scrollbarhead"/>
          </tr>
          </thead>
          <tbody className={s.tbody}>
          {contacts.map(({ name, number, email, id }) => (
            <tr key={id} className={s.table_row}>
            <td className={`${s.item} + ${ s.name}`}>{name}&nbsp;</td>
            <td className={`${s.item} + ${ s.number}`}><a href={"tel:" + { number }} className={s.contact}>{number}</a></td>
            <td className={`${s.item} + ${ s.email}`}><a href={"mailto:" + { email }} className={s.contact}>{email}</a></td>
            <td className={`${s.item} + ${ s.options}`}>
              <button
                type="button"
                className={s.btn}
                onClick={() => dispatch(deleteContact(id))}
              >
                <span className="material-icons">delete</span>
              </button>
              </td>
            </tr>))}
          </tbody>
          </table>
          </div>
          </div>
      }
    </>
  );
}

export default ContactsList;

