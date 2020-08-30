import styled from "styled-components";
import {Accordion, AccordionContent, AccordionTitle, Grid, GridColumn, Image} from "semantic-ui-react";

export const StyledImageWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledImage = styled(Image)`
  &&& {
    width: 800px;
  }
`;

export const StyledAccordion = styled(Accordion)`
  &&& {
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledAccordionTitle = styled(AccordionTitle)`
  &&& {
    padding: 16px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledAccordionTitleText = styled.h4`
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

export const StyledAccordionContent = styled(AccordionContent)`
  &&& {
    padding: 0 !important;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
    border-radius: 0 0 15px 15px;
  }
`;

export const StyledPastExecsTableWrapper = styled.div`
  &&& {
    padding: 32px 24px;
  }
`;

export const StyledTermWrapper = styled.div`
  &&& {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledTermText = styled.h3`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #000000;
  }
`;

export const StyledGrid = styled(Grid)`
  &&& {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-right: 0 !important;
  }
`;