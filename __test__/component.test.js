// ConditionalComponent.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ConditionalComponent from './component'; 

test('renders text when condition is true', () => {
  render(<ConditionalComponent condition={true} />);
  expect(screen.getByText('This is rendered when condition is true')).toBeInTheDocument();
});

test('renders text when condition is false', () => {
  render(<ConditionalComponent condition={false} />);
  expect(screen.getByText('This is rendered when condition is false')).toBeInTheDocument();
});
