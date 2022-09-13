import PropTypes from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as S from './styles';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground>
      <S.Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>

        <TextComponent>{html}</TextComponent>
      </S.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  background: PropTypes.bool,
};
