import React from 'react';
import styled from '@emotion/styled';
import { ContentsBox } from './index';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

const TimelineBox = () => {
  return (
    <ContentsBox title="Time Table">
      <Wrapper>
        준비 중입니다
        <BsFillExclamationTriangleFill />
      </Wrapper>
    </ContentsBox>
  );
};
const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1em',
});
export default TimelineBox;
