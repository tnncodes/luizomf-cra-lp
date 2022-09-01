import PropTypes from 'prop-types';
import * as S from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <S.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </S.Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colorDark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
};
