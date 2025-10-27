import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 16px;
  height: 64px;
  border-bottom: 1px solid #e6e6e6;
`;

const PageTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

const Header = () => {
  return (
    <HeaderBar>
      <PageTitle>Branch Overview</PageTitle>
      <div></div>
    </HeaderBar>
  );
};
export default Header;