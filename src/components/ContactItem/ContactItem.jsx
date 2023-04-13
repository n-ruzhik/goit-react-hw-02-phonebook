import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.listItem}>
    <p className={css.name}>{name}</p>    
     <div className={css.personData}>
        <p className={css.number}>{number}</p>
        <button
      className={css.deleteBtn}
      type="button"
      onClick={() => onDeleteContact(id)}
      aria-label="delete"
    >
      delete
      </button>
     </div>
      </li>
);

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};