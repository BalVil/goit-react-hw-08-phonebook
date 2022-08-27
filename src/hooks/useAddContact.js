import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showWarning, showSuccess } from 'components/Notification/Notification';
import { contactsActions } from 'redux/contacts/contactsSlice';
import { getItems, getIsLoading } from 'redux/contacts/ContactsSelectors';

export const useAddContact = () => {
  const [inputs, setInputs] = useState({});

  const contactsItems = useSelector(getItems);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const handleChange = e => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [nameInput]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameName =
      contactsItems.findIndex(
        item => item.name.toLowerCase() === inputs.name.toLowerCase()
      ) !== -1;

    if (sameName) {
      showWarning(`${inputs.name} is already in contacts `);
      return;
    }

    dispatch(contactsActions.addContact(inputs));

    setInputs({});
  };

  useEffect(() => {
    if (isLoading === 'addSuccess') {
      showSuccess('Contact added');
      dispatch(contactsActions.setIsLoading());
    }
  }, [dispatch, isLoading]);

  return { inputs, handleChange, handleSubmit, isLoading };
};
