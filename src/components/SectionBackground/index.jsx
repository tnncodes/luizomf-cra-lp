import PropTypes from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as S from './styles';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <S.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </S.Container>
  );
};

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
};
