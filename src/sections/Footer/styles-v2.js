import styled from "styled-components";
import { Image, Grid } from "semantic-ui-react";

export const StyledFooterWrapper = styled.div`
  &&& {
    text-align: center;
    margin-top: 50px;
    height: 427px;
    padding: 85px 370px 97px 370px;
    background-color: #aab4c0;
    font-family: Karla;
  }
`;

export const StyledCopyright = styled.h3`
  &&& {
    margin-top: 72px;
    font-size: 20px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const StyledTitleLeft = styled.h2`
  &&& {
    // padding-left: 159px;
    font-size: 20px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    color: #0d0c35;
  }
`;

export const StyledTitleRight = styled.h2`
  &&& {
    font-size: 20px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    color: #0d0c35;
  }
`;

export const StyledTextLeft = styled.body`
  &&& {
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    height: auto;
    background: transparent;
    text-align: left;
    color: #0d0c35;
  }
`;

export const StyledLinkRight = styled.a`
  &&& {
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    height: auto;
    background: transparent;
    text-align: left;
    color: #0d0c35;
	:hover {
		color: #49657F;
		cursor: pointer;
    }
  }
`;
