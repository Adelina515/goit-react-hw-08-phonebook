import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts?.length === 0 ? (
          <p>Haven't got contacts. Please, add contact </p>
        ) : (
          <Filter />
        )}
        {contacts?.length > 0 && <ContactList />}
      </div>
    </>
  );
}
