import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useContactList } from 'hooks/useContactList';
import { getIsLoading } from 'redux/ContactsSelectors';
import { Notification } from 'components/Notification/Notification';
import { Spinner } from 'components/Spinner/Spinner';
import Filter from 'components/Filter/Filter';

const ContactList = () => {
  const { FilteredContacts, filter, setFilter } = useContactList();
  const isloading = useSelector(getIsLoading);

  const noContactFound =
    FilteredContacts.length === 0 && isloading !== 'fetching';

  return (
    <>
      {isloading === 'fetching' ? (
        <Spinner />
      ) : (
        <Filter value={filter} onChange={setFilter} />
      )}

      <ul>
        {FilteredContacts.length > 0 &&
          FilteredContacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                id={id}
              ></ContactItem>
            );
          })}
      </ul>
      {noContactFound && (
        <Notification status="warning">No contacts found</Notification>
      )}
    </>
  );
};
export default ContactList;
