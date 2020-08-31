import styled from "styled-components";
import { Grid } from "semantic-ui-react";

export const StyledTitle = styled.h2`
  &&& {
    padding: 0px;
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
    margin: 8px 16px 18px 16px;
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
    margin-top: 15px;
    background-color: #f8f3ef;
    border-radius: 10px;
    border: none;
    shadow: none;
    height: 170px !important;
    width: 49.7% !important;
  }
`;