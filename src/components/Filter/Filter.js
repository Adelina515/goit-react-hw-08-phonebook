import style from 'components/Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const hendleChange = event => {
    const filterValue = event.target.value.toLocaleLowerCase();
    dispatch(setFilter(filterValue));
  };
  return (
    <>
      <label className={style.labelFil}> Find contacts by name </label>
      <input
        className={style.inputFil}
        type="text"
        onChange={hendleChange}
        name="filter"
        value={value}
      />
    </>
  );
};

export default Filter;
