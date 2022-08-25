import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Contact,
  ContactName,
  ContactNumber,
  EditButton,
  DelButton,
} from './ContactItem.styled';
import { Spinner } from 'components/Spinner/Spinner';
import * as contactsOperations from 'redux/contactsOperations';
import { getIsLoading } from 'redux/ContactsSelectors';
import { showWarning } from 'components/Notification/Notification';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

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
      <EditButton type="button" onClick={toggleModal} aria-label="Edit contact">
        Edit
      </EditButton>
      <DelButton
        type="button"
        onClick={() => handleDeleteContact(id)}
        aria-label="Delete contact"
      >
        {isLoading === id && <Spinner size={18} />}
        Delete
      </DelButton>
      {/* {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactEditor onSave={toggleModal} />
        </Modal>
      )} */}
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
