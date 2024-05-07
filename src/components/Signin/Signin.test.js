import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import SignIn from './Signin';
// Mocking axios.post method
jest.mock('axios');

describe('SignIn Component', () => {
  test('renders the component properly', () => {
    render(<SignIn />);
    // You can add more specific tests here
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });

  test('handles form submission properly', async () => {
    render(<SignIn />);
    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign In' });

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Mocking axios post response
    axios.post.mockResolvedValueOnce({
      data: {
        msg: 'user signed in successfully',
        token: 'mocked_token',
        role: 'mocked_role',
      },
    });

    // Simulate form submission
    fireEvent.click(submitButton);

    // You can add more specific assertions here
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        '/api/signin',
        { email: 'test@example.com', password: 'password123' }
      );
      expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mocked_token');
      // Assuming after successful sign-in, the component navigates to the home page
      expect(screen.getByText('Welcome')).toBeInTheDocument(); // Replace 'Welcome' with the text you expect on the home page
    });
  });

  // Add more tests as needed
});
