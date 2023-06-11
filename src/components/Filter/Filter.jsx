import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';
import { useFilter } from 'hooks';

export const Filter = () => {
  const filter = useFilter();
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.labelFilter}>
        Фільтр за ім'ям зрадника
        <input
          className={css.inputFilter}
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value))}
        ></input>
      </label>
    </div>
  );
};
