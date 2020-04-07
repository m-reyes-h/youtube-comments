import React from 'react';
import styled from 'styled-components'

const LayoutSt = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const Layout = props => {
  return (
    <LayoutSt>
      {props.children}
    </LayoutSt>
  );
}
 
export default Layout;