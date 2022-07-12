import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = data => {
    if (!haveDublicats(contacts, data)) {
      setContacts([data, ...contacts]);
    } else {
      alert(`${data.name} is already in contacts`);
    }
  };

  const haveDublicats = (contacts, data) => {
    return contacts.some(contact => contact.name === data.name);
  };

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    return setContacts(filteredContacts);
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const returnFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={returnFilteredContacts()}
        onDelete={deleteContact}
      />
    </div>
  );
};

// export class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// formSubmit = data => {
//   this.setState(({ contacts }) => {
//     if (!this.haveDublicats(contacts, data)) {
//       return { contacts: [data, ...contacts] };
//     } else {
//       alert(`${data.name} is already in contacts`);
//     }
//   });
// };

// haveDublicats = (contacts, data) => {
//   return contacts.some(contact => contact.name === data.name);
// };

// deleteContact = id => {
//   const filteredContacts = this.state.contacts.filter(
//     contact => contact.id !== id
//   );
//   this.setState(() => {
//     return { contacts: filteredContacts };
//   });
// };

// onChangeFilter = event => {
//   const { name, value } = event.currentTarget;
//   this.setState({ [name]: value });
// };

//   returnFilteredContacts() {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//     return visibleContacts;
//   }

//   componentDidMount() {
// const contacts = localStorage.getItem('contacts');
// const parseContacts = JSON.parse(contacts);
// if (parseContacts) {
//   this.setState({ contacts: parseContacts });
// }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
// return (
//   <div>
//     <h1>Phonebook</h1>
//     <Form onSubmit={this.formSubmit} />
//     <h2>Contacts</h2>
//     <Filter value={this.state.filter} onChange={this.onChangeFilter} />
//     <ContactList
//       contacts={this.returnFilteredContacts()}
//       onDelete={this.deleteContact}
//     />
//   </div>
// );
//   }
// }
