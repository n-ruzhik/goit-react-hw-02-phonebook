import React, { Component } from 'react';
import css from './ContactForm.module.css';


class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    };    

    // handleChange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    // };

    handleChange = e => {
      const { name, value } = e.currentTarget;

      this.setState({ [name]: value });
    };

    handleSubmit = event => {
      event.preventDefault();

      this.props.onSubmit(this.state);
      this.reset();
    };

    reset = () => {
      this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={css.formItem} htmlFor={this.nameInputId}>
                <input
                  className={css.input}
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="write your name"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
            </div>
            <div className={css.formItem} htmlFor={this.numberInputId}>
               <input
                   className={css.input}
                   value={this.state.number}
                   onChange={this.handleChange}
                   placeholder="+3** ** ** ** ***"
                   type="tel"
                   name="number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                />
            </div>
            <button className={css.button} type="submit" aria-label="button-submit">
            Add contact
            </button>
        </form>)
    }
}

export default ContactForm;