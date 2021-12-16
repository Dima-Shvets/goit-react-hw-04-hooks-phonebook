import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export function ContactList({ deleteContact, filteredContacts }) {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.element}>
            {name}: {number}
            <button
              className={s.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
