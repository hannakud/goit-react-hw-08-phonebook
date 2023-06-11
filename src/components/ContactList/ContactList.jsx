import css from './ContactList.module.css';
import { setFilter } from 'redux/contacts/filterSlice';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useFilteredContacts } from 'hooks';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();
  const list = useFilteredContacts();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    dispatch(setFilter(''));
  };

  return (
    <ul className={css.contactList}>
      {list.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <Button
              className={css.buttonDelete}
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
