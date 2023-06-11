import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section';
import { PhonebookForm } from './PhonebookForm';
import { PhonebookContacts } from './PhonebookContacts';
import { PhonebookFilter } from './PhonebookFilter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = (sentContact) => {
    const isExist = this.state.contacts.find(
      (contact) => contact.name === sentContact.name || contact.number === sentContact.number
    );
    if (isExist) {
      alert('Such contact already exists!');
      return;
    }

    console.log('Writing new user!');
    const user = {
      id: nanoid(),
      name: sentContact.name,
      number: sentContact.number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, user],
    }));
  };

  onFilterChange = (event) => {
    console.log('Filter changed!');
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContactById = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length > 0 ? (
            <>
              <PhonebookFilter
                filter={this.state.filter}
                onFilterChange={this.onFilterChange}
              />
              <PhonebookContacts
                contactsArr={this.getFilteredContacts()}
                deleteContactById={this.deleteContactById}
              />
            </>
          ) : (
            <p>No contacts found yet. Please add a new contact!</p>
          )}
        </Section>
      </div>
    );
  }
}