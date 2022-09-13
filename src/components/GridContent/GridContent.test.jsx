import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';

describe('<GridContent />', () => {
  it('should render a link', () => {
    renderTheme(<GridContent>Lorem ipsum</GridContent>);
    expect(screen.getByText(/lorem ipsum/i));
  });
});
