import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';

import App from './App';
import Account from './components/Account.js';


test('user log in',async ()=>{
  const { getByText, getByPlaceholderText, getByRole} = render(<App />);
  const accountLink = getByText('Log in / Create Account'); 

  act(()=>{
    userEvent.click(accountLink);
  });
})