import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from './contactsOperations';
import { showSuccess } from 'components/Notification/Notification';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isloading: false,
    error: null,
    status: 'idle',
  },
  reducers: {
    setIsLoading: (state, _) => {
      state.isloading = false;
    },
  },

  // 'immer' для мутації копію стану
  extraReducers: {
    [getContacts.pending]: (state, _) => {
      state.isloading = 'fetching';
    },
    [getContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isloading = false;
    },
    [getContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isloading = false;
    },

    [deleteContact.pending]: (state, action) => {
      state.isloading = action.meta.arg;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.isloading = false;
      // showSuccess('Contact deleted');
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isloading = false;
    },

    [addContact.pending]: (state, _) => {
      state.isloading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isloading = 'addSuccess';
      // showSuccess('Contact added');
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isloading = false;
    },
  },
});

export const contactsActions = {
  ...contactsSlice.actions,
  getContacts,
  deleteContact,
  addContact,
};
export const contactsReducer = contactsSlice.reducer;
