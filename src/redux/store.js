import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducers';
//

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    middleware,
  },
});

export default store;
