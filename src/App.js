import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsForm from './components/ContactsForm/ContactsForm';
import 'modern-normalize/modern-normalize.css';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${newContact.name} you heve this contact`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(
        contact => contact.id !== contactId,
      ),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const filtered = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
