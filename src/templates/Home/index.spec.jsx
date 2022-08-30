import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  renderTheme(<Home />);

  expect(screen.getByText(/home/i)).toBeInTheDocument();

  const headingContainer = screen.getByRole('heading', {
    name: 'home',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });

  expect(headingContainer).toHaveStyleRule(
    'background',
    theme.colors.secondaryBg
  );
});
