import styled from "styled-components";
import {Image} from "semantic-ui-react";

export const LinksWrapper = styled.div`
  &&& {
    padding-bottom: 8px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

//styles for the chain icon
export const StyledChain = styled(Image)`
  &&& {
    display: inline;
  }
`;

//styles for the link name
export const LinkName = styled.body`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: inline;
    background-color: transparent;
    color: #000000;
    margin-left: 8px;
  }
`;