import React from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import styled from '@emotion/styled';

const Statistics = () => {
  return (
    <div>
      <Wrapper>
        통계 페이지 준비 중입니다
        <BsFillExclamationTriangleFill />
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1em',
  padding: '1em',
});
export default Statistics;
