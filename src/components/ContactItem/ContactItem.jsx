import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Contact,
  ContactName,
  ContactNumber,
  DelButton,
} from './ContactItem.styled';
import { Spinner } from 'components/Spinner/Spinner';
import * as contactsOperations from 'redux/contactsOperations';
import { getIsLoading } from 'redux/ContactsSelectors';
import { showWarning } from 'components/Notification/Notification';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const handleDeleteContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  useEffect(() => {
    return () => {
      if (isLoading === id) {
        showWarning(`You have removed ${name} from your list `);
      }
    };
  }, [id, isLoading, name]);

  return (
    <Contact>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DelButton
        type="button"
        onClick={() => dispatch(handleDeleteContact(id))}
      >
        {isLoading === id && <Spinner size={18} />}
        Delete
      </DelButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
