import styled from "styled-components";
import {AccordionContent, AccordionTitle} from "semantic-ui-react";

//styles for the accordion content
export const StyledAccordionContent = styled(AccordionContent)`
  &&& {
    padding: 16px 24px !important;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
    border-radius: ${props => props.last ? "0 0 15px 15px" : "none"};
    @media only screen and (max-width: 425px) {
      padding: 8px 16px !important;
    }
  }
`;

export const StyledAccordionTitle = styled(AccordionTitle)`
  &&& {
    padding: 16px 24px 16px 16px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: ${props => props.first ? "none" : "auto"} !important;
    @media only screen and (max-width: 425px) {
      padding: 8px 8px 8px 16px !important;
    }
  }
`;

//styles for the text in the Accordion title
export const StyledATitle = styled.h4`
  &&& {
    font-family: "Karla";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;
