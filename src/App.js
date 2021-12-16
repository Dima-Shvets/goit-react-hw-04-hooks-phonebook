import { useState, useEffect, useRef } from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';
import { nanoid } from 'nanoid';
import './common-style.scss';
import './App.scss';

function App({}) {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const check = contacts.find(contact => contact.name === name);

    if (check) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);

    setContacts([...updatedContacts]);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} updateFilter={setFilter} />
      <ContactList
        filteredContacts={filterContacts()}
        deleteContact={deleteContact}
      />
    </>
  );
}

export default App;
