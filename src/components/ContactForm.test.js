import React from 'react';
import { findByText, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test("inputs accept type and submit", async () => {
  const vDOM = render(<ContactForm />);

  const firstInput = screen.getByPlaceholderText(/Edd/i);
  const lastInput = screen.getByPlaceholderText(/Burke/i);
  const emailInput = screen.getByPlaceholderText(/bluebill/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitBtn = screen.getByRole('button', {name: /submit/i});
  
  userEvent.type(firstInput, 'Ali');
  userEvent.type(lastInput, "della Battaglia");
  userEvent.type(emailInput, "test@test.tech");
  userEvent.type(messageInput, "A sample message goes here");
  
  expect(firstInput).toHaveValue('Ali');
  expect(lastInput).toHaveValue('della Battaglia');
  expect(emailInput).toHaveValue('test@test.tech');
  expect(messageInput).toHaveValue('A sample message goes here');
  
  await act(async () => {
    userEvent.click(submitBtn);
  })

  expect.objectContaining({
    firstName: expect.any(String),
    lastName: expect.any(String),
    email: expect.any(String)
});  
})