import styled from "styled-components";
import {Button} from "semantic-ui-react";

export const StyledButtonMobile = styled(Button)`
  &&& {
    background: #49657F;
    border-radius: 42px;
    padding: 16px 36px;
    color: #ffffff;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center; 
  }
`;

export const StyledButtonWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;