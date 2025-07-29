import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders React Essentials header', () => {
  render(<App />);
  const headerElement = screen.getByText(/React Essentials/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders React Essentials header', () => {
  render(<App />);
  const headerElement = screen.getByText(/React Essentials/i);
  expect(headerElement).toBeInTheDocument();
});