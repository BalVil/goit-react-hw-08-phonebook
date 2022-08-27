import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Contact, ContactName, ContactNumber } from './ContactItem.styled';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { getIsLoading } from 'redux/contacts/ContactsSelectors';
import { showWarning } from 'components/Notification/Notification';

const ContactItem = ({ id, name, number }) => {
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
      <LoadingButton
        sx={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translate(0, -50%)',
          fontSize: 12,
        }}
        type="button"
        loading={isLoading === id}
        onClick={() => handleDeleteContact(id)}
        aria-label="Delete contact"
        endIcon={<DeleteForeverOutlinedIcon />}
      >
        Delete
      </LoadingButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
