import PropTypes from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import * as S from './styles';

export const Menu = ({ links = [], logoData }) => {
  return (
    <S.Container>
      <SectionContainer>
        <S.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </S.MenuContainer>
      </SectionContainer>
    </S.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};
