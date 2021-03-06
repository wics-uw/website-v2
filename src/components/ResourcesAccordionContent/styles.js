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
    @media only screen and (max-width: 425px) {
      width: 14px;
    }
  }
`;

//styles for the link name
export const LinkName = styled.p`
  &&& {
    font-family: 'Source Sans Pro SemiBold';
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    display: inline;
    background-color: transparent;
    color: #000000;
    margin: 0 0 0 8px;
    &:hover {
      text-decoration-line: underline;
    }
    @media only screen and (max-width: 425px) {
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      margin: 0 0 0 4px;
    }
  }
`;