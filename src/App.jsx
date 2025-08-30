import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import './App.css';
import { Filter } from './components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const findContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number.toLowerCase() === number.toLowerCase()
    );
    if (findContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: crypto.randomUUID(), name, number },
      ],
    }));
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getfilteredContacts = () => {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm
          state={this.state}
          handleAddContact={this.handleAddContact}
        />
        <h2 className="title">Contacts</h2>
        <Filter state={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          filteredData={this.getfilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
