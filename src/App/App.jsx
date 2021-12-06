import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onAddContact = (name, number) => {
    if (this.onCheckContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const obj = { id: nanoid(), name, number };
    this.setState(prevState => ({ contacts: [...prevState.contacts, obj] }));
  };
  render() {
    return <Form onSubmit={this.onAddContact} />;
  }
}
