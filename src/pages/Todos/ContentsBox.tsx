import React from 'react';
import styled from '@emotion/styled';

const ContentsBox: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <Wrapper>
      <TitleBox>{title}</TitleBox>
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div({
  width: '48%',
});
const TitleBox = styled.div(({ theme }) => ({
  background: theme.colors.secondaryBg,
  borderTop: `2px solid ${theme.colors.secondary}`,
  borderBottom: `2px solid ${theme.colors.secondary}`,
  color: theme.colors.secondaryText,
  padding: '0.5em 1em',
  fontSize: '0.8em',
}));
export default ContentsBox;
