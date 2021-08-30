import { css } from '@emotion/react';

const globalStyle = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'NanumSquareRound, sans-serif',
  },
  a: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  li: {
    listStyle: 'none',
  },
  input: {
    '&:focus': { outline: 'none' },
  },
});
export default globalStyle;
