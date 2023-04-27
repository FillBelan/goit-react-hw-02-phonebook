import {
  ContactsList,
  ContactItem,
  DeleteBtn,
  ContactName,
} from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <span>&#128241;</span>
            <div>
              <ContactName>{name}</ContactName> : {number}
            </div>
            <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  vesibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
