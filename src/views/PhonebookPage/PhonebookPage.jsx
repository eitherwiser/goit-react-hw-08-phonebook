import { useSelector } from 'react-redux';


import ContactForm from 'components/Form/Form.jsx';
import ContactsList from 'components/ContactsList/ContactsList.jsx';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
//





const PhonebookPage = () => {
  const isloggedIn = useSelector(getIsLoggedIn)

  return (
    <>
      {isloggedIn && <UserMenu/>}
      <ContactForm />
      <ContactsList />
    </>
  )
};

export default PhonebookPage;