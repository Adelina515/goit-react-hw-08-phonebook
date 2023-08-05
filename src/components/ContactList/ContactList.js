import style from 'components/ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li className={style.li} key={contact.id}>
          <span className={style.spanName}>{contact.name}: </span>
          <span className={style.spanNumber}>{contact.number} </span>
          <button
            className={style.btnDelete}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
