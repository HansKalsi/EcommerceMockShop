import { render } from '@testing-library/react';
import App from '../App';
import { describe, it } from 'vitest';

describe('App', () => {
  it('App component renders', () => {
    render(<App />);
    // screen.debug(); // prints out the DOM of App into the command line
  });
  it('Can add a product to the basket', () => {

  });
  it('Can add and remove a product from the basket', () => {

  });
  it('Can navigate pages and basket remains unchanged', () => {
    
  });
});
