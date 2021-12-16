import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.scss';

const nameInputId = nanoid();
const numberInputId = nanoid();

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputHandler = e => {
    const { value, name } = e.target;

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

  const submitHandler = e => {
    e.preventDefault();

    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s['contact-form']} onSubmit={submitHandler}>
      <label htmlFor={nameInputId} className={s['name-label']}>
        Name
      </label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={inputHandler}
      />
      <label htmlFor={numberInputId} className={s['number-label']}>
        Number
      </label>
      <input
        id={numberInputId}
        className={s['number-input']}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={inputHandler}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
