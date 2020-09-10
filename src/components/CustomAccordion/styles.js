import styled from "styled-components";
import {Accordion, AccordionContent, AccordionTitle} from "semantic-ui-react";

// The following styles are for accordions of Past Execs and Sponsors section

// Styles for accordion shape
export const StyledAccordion = styled(Accordion)`
  &&& {
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

// Styles for accordion content
export const StyledAccordionContent = styled(AccordionContent)`
  &&& {
    padding: 0 !important;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
    border-radius: 0 0 15px 15px;
    @media only screen and (max-width: 425px) {
      border-radius: 0 0 10px 10px;
    }
  }
`;

// Styles for accordion title
export const StyledAccordionTitle = styled(AccordionTitle)`
  &&& {
    padding: 16px 24px 16px 16px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 425px) {
      padding: 8px 8px 8px 16px !important;
    }
  }
`;

export const StyledAccordionTitleText = styled.h4`
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

export const StyledContentTableWrapper = styled.div`
  &&& {
    padding: 32px 24px;
    @media only screen and (max-width: 425px) {
      padding: 8px 16px 16px 16px;
    }
  }
`;