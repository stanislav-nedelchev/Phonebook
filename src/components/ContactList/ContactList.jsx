import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const onDeleteBtn = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactBox}>
          <Contact contact={contact} onDeleteBtn={onDeleteBtn} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
