import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return ( 
    <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      onChange={changeFilterInput}
    />
  </label>
  );
};
  
