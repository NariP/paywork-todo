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
const Wrapper = styled.aside({
  display: 'flex',
});

export default DashboardLayout;
