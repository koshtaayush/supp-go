import styled from "styled-components";
import Logo from './Logo'

const HeaderC = styled.div`
  display: flex;
  /* max-width: 1280px; */
  margin: auto;
  height: 88px;
  align-items: center;
  justify-content: center;
  width: 100vw;
 padding: 40px 0;
 background: white;
`;

function Header() {
    return (<div > 
        <HeaderC>
            <Logo />
       </HeaderC>
    </div> );
}

export default Header
