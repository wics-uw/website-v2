import styled from "styled-components";
import {Button, Accordion, AccordionContent, AccordionTitle, Grid, GridColumn} from "semantic-ui-react";

//styles for the "interested in..." text
export const InterestedLine = styled.body`
  &&& {
    margin-top: 9px;
    width: 648px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;


//styles for the sponsor type 
export const SponsorType = styled.body`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-top: 57px;
    margin-bottom: 28px;
    letter-spacing: -0.02em;
    background-color: transparent;
    color: #000000;

  }
`;


//styles for the sponsor type for links
export const SponsorTypeLink = styled.body`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 0 !important;
    margin-top: 32px;
    letter-spacing: -0.02em;
    color: #000000;
    background-color: transparent;
    padding-top: 0 !important;
    padding-bottom:0 !important;

  }
`;

//styles for the 'want to get involved' text 
export const Interested = styled.body`
  &&& {
    margin-top: 57px;
    margin-bottom: 20px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
`;

//styles for the learn More button
export const LearnMore = styled(Button)`
  &&& {
    width: 147px;
    height: 43px;
    color: white;
    background: #49657F;
    border-radius: 42px;
  }
`;

//styles for wrapper around button and surronding text
export const MoreWrapper = styled.div`
  &&& {
      margin: auto;
      text-align: center;
      margin-top: 82px;
  }
`;

//styles for the sponsor image 
export const SponsorImg = styled.img`
  &&& {
    vertical-align: middle;
  }
`;


export const StyledTitle = styled.h4`
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

export const StyledAccordion = styled(Accordion)`
  &&& {
    margin-top: 32px;
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;


export const SponsorsWrapper = styled.div`
  &&& {
    width: 1060px;
    
  }
`;


export const ColorLine = styled.div`
  &&& {
    width: 3px;
    background: #E7BEB2;
    display: inline;
  }
`;


export const BackColor = styled.div`
  &&& {
    width: 1057px;
    background: #E7BEB2;
    opacity: 0.15;
    display: inline;
  }
`;

export const StyledLink = styled.a`
  &&& {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: black;
    padding: 0px 0px 0px 0px;
    margin-bottom: 8px;
    background-color: transparent;
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

export const StyledAccordionContent = styled(AccordionContent)`
  &&& {
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
    border-radius: 0 0 15px 15px;
    padding-left: 24px;
  }
`;


export const StyledGrid= styled(Grid)`
  &&& {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0 0 0;
  }
`;


export const StyledGridColumn= styled(GridColumn)`
  &&& {
    padding-top: 16px !important;
    padding-bottom:0 !important;
    margin: 0 0 0 0;
    text-align: center;
  }
`;

export const StyledGridColumnL = styled(GridColumn)`
  &&& {
    padding-top: 16px !important;
    padding-bottom:0 !important;
    margin: 0 0 0 0;
  }
`;