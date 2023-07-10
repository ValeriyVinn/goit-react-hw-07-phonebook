import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>
        {name}: {phone}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
