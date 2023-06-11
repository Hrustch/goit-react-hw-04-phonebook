import React from 'react';
export class PhonebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            Name
            <input
              id="input_name"
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
  
          <label htmlFor="iput_name">
            Number
            <input
              id="input_tell"
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </label>
  
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  };
}
/* 
let contact = {
  name: '',
  number: '',
};

function updateProps(event) {
  console.log(event.target.value);
  const { name, value } = event.target;
  contact[name] = value;
  console.log(contact);
}

export const PhonebookForm = ({ addNewContact }) => {
  return (
    <>
      <form onSubmit={(event)=>{addNewContact(contact, event)}}>
        <label>
          Name
          <input
            id="input_name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={updateProps}
          />
        </label>

        <label htmlFor="iput_name">
          Number
          <input
            id="input_tell"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={updateProps}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
 */