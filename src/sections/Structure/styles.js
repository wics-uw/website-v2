import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const StyledTitle = styled.h2`
  &&& {
    margin-top: 37px;
    font-size: 24px;
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
    text-align: center;
    color: #000000;
    letter-spacing: -0.02em;
  }
`;

export const StyledText = styled.body`
  &&& {
    margin: 8px 33px 37px 33px;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    height: auto;
    background: transparent;
    text-align: center;
    color: #000000;
  }
`;

export const StyledSegment = styled(Segment)`
  &&& {
    margin: 2px;
    background-color: #f8f3ef;
    border: none;
    shadow: none;
  }
`;
