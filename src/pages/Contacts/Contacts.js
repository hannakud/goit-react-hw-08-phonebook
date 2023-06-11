import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from '../../components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { useError, useFilter, useFilteredContacts, useIsLoading } from 'hooks';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContactsList = useFilteredContacts();
  const filter = useFilter();
  const isLoading = useIsLoading();
  const error = useError();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const emptyMessage = filter
    ? `No contacts macth "${filter}"`
    : 'Phonebook is empty. Add contacts first';

  return (
    <main className={css.main}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {filteredContactsList.length ? (
        <ContactList />
      ) : (
        <div className={css.message}>{emptyMessage}</div>
      )}
      <ToastContainer />
    </main>
  );
};
