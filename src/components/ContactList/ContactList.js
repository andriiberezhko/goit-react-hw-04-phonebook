import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteBtn={onDelete}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
