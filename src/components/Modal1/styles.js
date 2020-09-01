import styled from "styled-components";
import {Grid, Header, Icon} from "semantic-ui-react";


export const StyledTitle = styled.h2`
&&&{
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    margin-bottom: 8px;
}
`;


export const StyledDescription = styled.h4`
&&&{
    margin-top: 0;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
}
`;

export const CloseStyled = styled.div`
&&&{
  width: 20px;
  height: 20px;
  
  transform: translate (0px, 22px);
  : hover {
    cursor: pointer;
  }
}
`;


export const HWrapper = styled.div`
&&&{
  padding: 32px 32px 32px 32px;
  margin: 0 0 0 0;
}
`;


export const StyledHeader = styled(Header)`
&&&{
    padding: 0 0 0 0 !important;
}
`;

