import React from 'react';
import PropTypes from 'prop-types';

export default function Game({ mode }) {
  return (
    <div>
      <span>{mode}</span>
      <span>Test</span>
    </div>
  );
}
Game.propTypes = {
  mode: PropTypes.string.isRequired
  // ...prop type definitions here
};
