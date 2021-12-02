import React from 'react';

import ContactForm from './components/Form/Form.jsx';
import ContactsList from './components/ContactsList/ContactsList.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <ContactsList />
    </>
  );
}
