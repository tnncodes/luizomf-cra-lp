import PropTypes from 'prop-types';
import * as S from './styles';

export const SectionContainer = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
