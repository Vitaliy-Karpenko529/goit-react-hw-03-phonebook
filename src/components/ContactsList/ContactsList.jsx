import s from './ContactsList.module.css';
import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, onDeleteContact }) =>
  contacts.length === 0 ? (
    <div className={s.message}>No contacts!</div>
  ) : (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <ContactsListItem
            onDeleteContact={onDeleteContact}
            contact={contact}
          />
        </li>
      ))}
    </ul>
  );

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
