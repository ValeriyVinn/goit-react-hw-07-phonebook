import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(selectContactsFilter).toLowerCase();
  const contacts = useSelector(selectContacts);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <>
      {contacts && (
        <ul>
          {filteredContacts.map(({ id, name, phone }) => {
            return <Contact key={id} id={id} name={name} phone={phone} />;
          })}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
