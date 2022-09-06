import PropTypes from 'prop-types';
import { Heading } from '../Heading';
import * as S from './styles';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <S.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />} {!srcImg && text}
      </S.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  link: PropTypes.string.isRequired,
};
