import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);

    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    const link = screen.getByRole('link', { name: 'Olá mundo' });

    expect(heading).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />
    );

    const alt = screen.getByAltText('Olá mundo');

    expect(alt).toHaveAttribute('src', 'image.jpg');
  });
});
