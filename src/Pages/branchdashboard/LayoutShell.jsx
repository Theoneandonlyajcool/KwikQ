import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f6fa;
`;
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ContentArea = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
`;

const LayoutShell = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <ContentArea><Outlet/></ContentArea>
      </MainContent>
    </LayoutContainer>
  );
};
export default LayoutShell;