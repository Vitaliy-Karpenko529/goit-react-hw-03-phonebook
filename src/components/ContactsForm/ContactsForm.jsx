import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.css';
import React, { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.reset();
    this.props.onSubmit(this.state);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.nameId}>
          Name
          <input
            className={s.input}
            placeholder="Don Omar"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            type="text"
            name="name"
            required
            onChange={this.handleChange}
            id={this.nameId}
          />
        </label>

        <label className={s.label} htmlFor={this.telId}>
          Number
          <input
            className={s.input}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            placeholder="555-55-55"
            name="number"
            required
            onChange={this.handleChange}
            id={this.telId}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsForm;
