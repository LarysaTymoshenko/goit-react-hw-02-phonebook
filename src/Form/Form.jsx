import React, { Component } from 'react';
// import s from './Form.module.css';

export default class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <form action="">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />{' '}
      </form>
    );
  }
}
