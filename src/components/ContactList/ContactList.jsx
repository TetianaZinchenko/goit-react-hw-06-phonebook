import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Contacts } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';
import Notification from 'components/Notification/Notification';
// import { Notification } from 'components/Notification/Notification';

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <Contacts>
      {filteredContacts.length ? (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      ) : (
        <Notification />
      )}
    </Contacts>
  );
}
