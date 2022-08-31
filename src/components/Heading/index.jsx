import PropTypes from 'prop-types';
import * as S from './styles';

export const Heading = ({ children, light = false }) => {
  return <S.Title light={light}>{children}</S.Title>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool.isRequired,
};
