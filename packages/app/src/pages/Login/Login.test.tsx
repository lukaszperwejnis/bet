import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Login } from '@pages';
import axios from 'axios';
import fetchMock from 'fetch-mock';
import { rootStore } from '@stores/index';

import { Message } from '@structures';
import { pl } from '../../locales/pl';
import { URLS } from '../../urls';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderLoginPage = () =>
  render(
    <IntlProvider locale="pl" messages={pl}>
      <Provider store={rootStore}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    </IntlProvider>,
  );

describe('Login Integration Tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('successfully logs in', async () => {
    const { getByTestId } = render(
      <IntlProvider locale="pl" messages={pl}>
        <Provider store={rootStore}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </Provider>
      </IntlProvider>,
    );

    const loginUrl = URLS.USER.SIGNIN; // Assuming this is the URL for login
    const mockedPayload = {
      email: 'test@example.com',
      password: 'password123',
    };

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');

    fireEvent.change(emailInput, { target: { value: mockedPayload.email } });
    fireEvent.change(passwordInput, {
      target: { value: mockedPayload.password },
    });
    fireEvent.click(submitButton);

    // Mock a successful login response
    fetchMock.post(loginUrl, {
      status: 200, // Successful status code
      body: JSON.stringify({ token: 'exampleToken' }), // Mock response data
    });

    // Wait for the loader to disappear
    await waitFor(() => {
      expect(getByTestId('loader')).not.toBeInTheDocument();
    });

    // Check if the user is redirected to the dashboard or another authenticated page
    // You may need to implement this check based on your application's behavior
    // For example, you can check the current route or Redux store state.
    // Expectations will depend on your application's behavior.
    // Example: expect(window.location.pathname).toBe('/dashboard');
  });
  // test('submits the empty form', async () => {
  //   const { getByTestId } = renderLoginPage();
  //   const submitButton = getByTestId('submit');
  //   fireEvent.click(submitButton);
  //
  //   await waitFor(() => {
  //     expect(getByTestId('email__validation-error')).toBeTruthy();
  //     expect(getByTestId('password__validation-error')).toBeTruthy();
  //   });
  // });

  // test('submits the form with email and password and wait for loader', async () => {
  //   const { getByTestId } = renderLoginPage();
  //   const loginUrl = URLS.USER.SIGNIN;
  //   const mockedPayload = {
  //     email: 'test@example.com',
  //     password: 'password123',
  //   };
  //
  //   const emailInput = getByTestId('email');
  //   const passwordInput = getByTestId('password');
  //   const submitButton = getByTestId('submit');
  //   fireEvent.change(emailInput, { target: { value: mockedPayload.email } });
  //   fireEvent.change(passwordInput, {
  //     target: { value: mockedPayload.password },
  //   });
  //   fireEvent.click(submitButton);
  //
  //   fetchMock.post(loginUrl, {
  //     status: 401,
  //     body: 'Unauthorized',
  //     headers: { 'Content-Type': 'text/plain' },
  //   });
  //
  //   await waitFor(() => {
  //     expect(getByTestId('loader')).toBeTruthy();
  //   });
  // });

  // test('submits the form with email and password with incorrect credentials', async () => {
  //   const { getByTestId } = renderLoginPage();
  //   const mockedPayload = {
  //     email: 'test@example.com',
  //     password: 'password123',
  //   };
  //   const mockResponse = {
  //     status: 401,
  //     body: 'Unauthorized',
  //     headers: { 'Content-Type': 'text/plain' },
  //   };
  //
  //   mockedAxios.post.mockReturnValueOnce(Promise.resolve(mockResponse));
  //
  //   const emailInput = getByTestId('email');
  //   const passwordInput = getByTestId('password');
  //   const submitButton = getByTestId('submit');
  //   fireEvent.change(emailInput, { target: { value: mockedPayload.email } });
  //   fireEvent.change(passwordInput, {
  //     target: { value: mockedPayload.password },
  //   });
  //   fireEvent.click(submitButton);
  //
  //   await waitFor(() => {
  //     const currentState = rootStore.getState();
  //     expect(currentState.auth.error).toBeTruthy();
  //     expect(currentState.auth.isLoading).toBeFalsy();
  //     expect(currentState.messages.length).toBeTruthy();
  //     expect(currentState.messages[0].type).toBe(Message.Type.Error);
  //   });
  // });
});
