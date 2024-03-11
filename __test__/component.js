// ConditionalComponent.js
// ConditionalComponent.js

import React from "react";

const ConditionalComponent = ({ condition }) => {
  return (
    <div>
      {condition ? (
        <p>This is rendered when condition is true</p>
      ) : (
        <p>This is rendered when condition is false</p>
      )}
    </div>
  );
};

export default ConditionalComponent;
