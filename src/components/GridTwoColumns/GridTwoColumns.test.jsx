import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Dummy } from '.';

describe('<GridTwoColumns />', () => {
  it('should render a link', () => {
    renderTheme(<Dummy>Lorem ipsum</Dummy>);
    expect(screen.getByText(/lorem ipsum/i));
  });
});
