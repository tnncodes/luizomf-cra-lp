import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders learn react link', () => {
  render(<Home />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
