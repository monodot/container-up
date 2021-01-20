import { render, screen } from '@testing-library/react';
import App from './App';

test('renders kylie fan club link', () => {
  render(<App />);
  const linkElement = screen.getByText(/kylie fan club/i);
  expect(linkElement).toBeInTheDocument();
});
