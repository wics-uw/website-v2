import styled from "styled-components";
import {Button} from "semantic-ui-react";

//styles for wrapper around button and surrounding text
export const MoreWrapper = styled.div`
  &&& {
    text-align: center;
    margin-top: 60px;
  }
`;

//styles for the 'want to get involved' text
export const Interested = styled.h4`
  &&& {
    margin-bottom: 16px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
  }
`;

//styles for the learn More button
export const LearnMore = styled(Button)`
  &&& {
    width: 147px;
    height: 43px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    background: #49657F;
    border-radius: 42px;
  }
`;
