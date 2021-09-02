import React from 'react';
import styled from '@emotion/styled';
import { SideBar } from '../DashboardLayout';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.section({
  display: 'flex',
  width: '100%',
});
export default DashboardLayout;
