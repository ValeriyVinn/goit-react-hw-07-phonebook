import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const contact = {
      name,
      phone,
  };

  const enterContacts = contacts.some(
    contact =>
      (contact.name.toLowerCase() === name.toLowerCase() || contact.phone === phone) ||
      contact.phone === phone
  );
  enterContacts
    ? alert(`${name} or ${phone} is already in contacts`)
    : dispatch(addContact(contact));

  setName('');
  setNumber('');
};

    return (
      <form onSubmit={handleSubmit}>
        <label>
            Name
            <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Z\s]+$"
            title="Name may contain only latin letters"
            required
            />
        </label>

        <label>
          Number
          <input
          type="tel"
          name="number"
          value={phone}
          onChange={handleChange}
          pattern="^\d{3}-\d{2}-\d{2}$"
            title="The phone number should look like this: 012-34-56"
          required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  };
