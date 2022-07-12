import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, deleteBtn }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteBtn(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};
