import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("App contains ContactForm", () => {
  render(<App />);
  // expect(screen.getByLabelText(/first/i)).toBeInTheDocument();
})