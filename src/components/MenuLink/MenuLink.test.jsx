import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Lorem ipsum</MenuLink>);
    expect(screen.getByRole('link', { name: 'Lorem ipsum' })).toHaveAttribute(
      'target',
      '_self'
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        Lorem ipsum
      </MenuLink>
    );
    expect(screen.getByRole('link', { name: 'Lorem ipsum' })).toHaveAttribute(
      'target',
      '_blank'
    );
  });
});
