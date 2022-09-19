import PropTypes from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as S from './styles';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((el) => (
            <S.GridElement key={`${el.srcImg}${el.altText}`}>
              <S.Image src={el.srcImg} alt={el.altText} />
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string.isRequired,
      srcImg: PropTypes.string.isRequired,
    })
  ).isRequired,
  sectionId: PropTypes.string,
};
