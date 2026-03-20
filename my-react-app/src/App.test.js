import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link WRONG TEXT', () => {
  render(<App />);
  const linkElement = screen.getByText(/this text does not exist/i);
  expect(linkElement).toBeInTheDocument();
});
