import React from 'react';
import styled from '@emotion/styled';
interface I_borderBox {
  title: string;
  data: string;
}
const BorderBox: React.FC<I_borderBox> = ({ title, data }) => {
  return (
    <Wrapper>
      <Box>
        <Title>{title}</Title>
        <Text>{data}</Text>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div({
  position: 'relative',
  width: '32%',
  marginBottom: '1em',
});
const Box = styled.div(({ theme }) => ({
  background: theme.colors.secondaryBg,
  borderTop: `2px solid ${theme.colors.secondary}`,
  borderBottom: `2px solid ${theme.colors.secondary}`,
  padding: '0.5em 1em',
}));
const Title = styled.div(({ theme }) => ({
  color: theme.colors.secondaryText,
  fontSize: '0.8em',
  marginBottom: '1em',
}));
const Text = styled.div({
  fontSize: '1.1em',
});
export default BorderBox;
