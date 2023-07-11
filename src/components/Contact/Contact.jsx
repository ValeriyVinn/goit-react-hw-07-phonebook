import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact}>
      <p>
        {name}: {phone}
      </p>
      <button className={css.btnDelete} type="button" onClick={handleDelete}>
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
