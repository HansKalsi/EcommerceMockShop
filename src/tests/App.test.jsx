import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('App component renders', () => {
    render(<App />);
    // screen.debug(); // prints out the DOM of App into the command line
  });
});
