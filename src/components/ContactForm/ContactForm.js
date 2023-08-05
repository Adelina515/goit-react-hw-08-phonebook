import { useState } from 'react';
import style from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectFilterContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    const isContact = contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (isContact) {
      alert('contact already exist');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        onChange={onChange}
        name="name"
        value={name}
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        type="tel"
        onChange={onChange}
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={style.btnSubm} type="submit">
        {' '}
        Add contact{' '}
      </button>
    </form>
  );
};

export default ContactForm;
