import {
  ContactsList,
  ContactItem,
  DeleteBtn,
  ContactName,
} from './ContactList.styled';

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
