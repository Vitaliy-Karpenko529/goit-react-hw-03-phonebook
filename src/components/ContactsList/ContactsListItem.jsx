import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactsListItem = ({ contact, onDeleteContact }) => (
  <>
    <span className={s.information}>
      {contact.name}: {contact.number}
    </span>
    <button
      className={s.button}
      type="button"
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </>
);

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
