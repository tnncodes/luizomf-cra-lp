import PropTypes from 'prop-types';
import * as S from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <S.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </S.Container>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    })
  ),
};
