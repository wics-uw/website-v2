import styled from "styled-components";
import { Grid } from "semantic-ui-react";

export const StyledTitle = styled.h2`
  &&& {
    margin-top: 18px;
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
    margin: 8px 27px 18px 27px;
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

export const StyledColumn = styled(Grid.Column)`
  &&& {
    background-color: #f8f3ef;
    border-radius: 10px;
    height: 170px !important;
    // calculated as (1-6/1056)/2 (must round down)
    width: 49.7% !important;
  }
`;
