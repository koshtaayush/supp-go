import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const Wrapper = styled(Stack)`
    position: fixed;
    bottom: 0;
    nav {
        padding: 5px;
    background: #bcbcfb;
}
    ul {

        display: flex;
        justify-content: center;
        width: '100%'
    }
    
`

export default function Page() {
  return (
      <Wrapper sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }} spacing={2}>
      <Pagination count={10} color="primary" />
    </Wrapper>
  );
}