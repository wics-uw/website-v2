import styled from "styled-components";
import {Button} from "semantic-ui-react";

//styles for wrapper around button and surrounding text
export const MoreWrapper = styled.div`
  &&& {
    text-align: center;
    margin-top: 60px;
    @media only screen and (max-width: 425px) {
      margin-top: 32px;
    }
  }
`;

//styles for the 'want to get involved' text
export const Interested = styled.h4`
  &&& {
    margin-bottom: 16px;
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 8px;
    }
  }
`;

//styles for the learn More button
export const LearnMore = styled(Button)`
  &&& {
    padding: 16px 32px;
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    background: #49657F;
    border-radius: 42px;
    &:hover {
      background: #60809D;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      transform: translate(0,-2px);
    }
    &:focus {
      background: #3F566B;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;
