import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ color, theme }) => css`
    background: ${theme.colors.secondaryBg};
    color: ${color};
  `}
`;
