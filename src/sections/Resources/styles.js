import styled from 'styled-components';
import {Accordion, AccordionContent, AccordionTitle} from 'semantic-ui-react';

//styles for the text in the Accordion title
export const StyledATitle = styled.h4`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
  }
`;

//styles for the accordion
export const StyledAccordion = styled(Accordion)`
  &&& {
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledAccordionTitle = styled(AccordionTitle)`
  &&& {
    padding: 16px 24px 16px 16px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

//styles for the accordion content
export const StyledAccordionContentR = styled(AccordionContent)`
  &&& {
    padding: 16px 24px !important;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
    border-radius: 0 0 15px 15px;
  }
`;

//styles for the accordion content
export const StyledAccordionContent = styled(AccordionContent)`
  &&& {
    padding: 16px 24px !important;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
  }
`;
