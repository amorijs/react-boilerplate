import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SamplePresentational = props => (
  <button onClick={props.onClick}>{props.count}</button>
);

SamplePresentational.propTypes = {
  onClick: PropTypes.func,
  count: PropTypes.number
}

export default SamplePresentational;
