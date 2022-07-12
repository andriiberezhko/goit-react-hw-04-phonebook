import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
