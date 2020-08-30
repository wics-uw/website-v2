import styled from "styled-components";
import {Button, Icon, Accordion} from "semantic-ui-react";

//styles for the "interested in..." text
export const InterestedLine = styled.body`
  &&& {
    margin-top: 9px;
    width: 648px;
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;

//styles for the email 
export const Email = styled.body`
  &&& {
    margin-top: 9px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: inline;
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
    /* identical to box height */
    
    letter-spacing: -0.02em;
    
    color: #000000;

  }
`;


//styles for the sponsor type 
export const SponsorTypeLink = styled.body`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
    margin-top: 16px;
    letter-spacing: -0.02em;
    color: #000000;

  }
`;

//styles for the 'interested in becoming a sponsor' text 
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


//styles for the wrapper of the sponsor image 
export const ImgWrapper = styled.span`
  &&& {
  
  }
`;


export const StyledChevronIcon = styled(Icon)`
  &&& {
    margin-left: 842px;
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
    
  }
`;

export const StyledAccordion = styled(Accordion)`
  &&& {
    margin-top: 32px;
    width: 1060px;
    
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
  }
`;
