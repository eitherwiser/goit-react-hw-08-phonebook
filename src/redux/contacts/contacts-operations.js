import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61a7e524387ab200171d2f4b.mockapi.io/testAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const resp = await axios.get('/contacts');
    return resp.data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const resp = await axios.post('/contacts', contact);
    return resp.data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  },
);
