import PropTypes from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as S from './styles';

export const GridTwoColumns = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Container>
        <S.TextContainer>
          <Heading uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </S.TextContainer>

        <S.ImageContainer>
          <S.Image src={srcImg} alt={title} />
        </S.ImageContainer>
      </S.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  background: PropTypes.bool,
};
