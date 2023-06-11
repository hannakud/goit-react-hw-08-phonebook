import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

export const useFilter = () => useSelector(selectFilter);
