import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testes da TELA DE LOGIN', () => {
  test('Todos os inputs e button da tela devem estar presentes', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const loginBtn = screen.getByTestId('login-submit-btn');

    expect(inputEmail).toBeDefined();
    expect(inputPassword).toBeDefined();
    expect(loginBtn).toBeDefined();
  });
});
