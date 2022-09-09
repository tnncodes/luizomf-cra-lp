import { useState } from 'react';
import PropTypes from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as S from './styles';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <S.MenuButton
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </S.MenuButton>

      <S.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <S.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};
