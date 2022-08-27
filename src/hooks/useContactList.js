import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from 'redux/contacts/ContactsSelectors';
import * as contactsOperations from 'redux/contacts/contactsOperations';

export const useContactList = () => {
  const [filter, setFilter] = useState('');
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const FilteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase().trim();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, items]);

  return { FilteredContacts, filter, setFilter };
};
