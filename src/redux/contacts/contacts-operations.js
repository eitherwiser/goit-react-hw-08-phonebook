import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const resp = await axios.post('/contacts', contact);
      return resp.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const patchContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, contact) => {
    try {
      const resp = await axios.patch(`/contacts/${id}`, contact);
      return resp;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);
