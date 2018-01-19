import React, { Component } from 'react';

const SamplePresentational = props => (
  <button onClick={props.onClick}>{props.count}</button>
);

export default SamplePresentational;
