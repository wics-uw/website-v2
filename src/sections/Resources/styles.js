import styled from 'styled-components';
import { Accordion, AccordionContent, Icon, Image} from 'semantic-ui-react';

export const StyledATitle = styled.h4`
&&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    display: inline;
    color: #000000;
}
`;

export const AccordionWrapper = styled.div`
&&& {
    width: 437px;
    margin-top: 32px;
    z-index: 1000;
    position: absolute;
    float: left;
    margin-bottom: 0px;
}
`;


export const StyledIcon = styled(Icon)`
&&& {
    display: inline;
    float: right;
    margin-top: 8px;
}
`;


export const LinksWrapper = styled.div`
&&& {
    margin-left: 16px;
    padding-top: 4px;
    padding-bottom: 2px;
}
`;


export const LinkName = styled.body`
&&& {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: inline;
    background-color: transparent;
}
`;

export const Illustration = styled(Image)`
&&& {
    float: right;
    margin-left: 20px;
}
`;


export const ContentWrapper = styled.div`
&&& {
    
    margin-bottom: 40px;
}
`;


export const Clear = styled.div`
&&& {
    clear: both;
}
`;

export const StyledAccordion = styled(Accordion)`
    &&&{
        border-radius: 15px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

export const StyledAccordionContentR = styled(AccordionContent)`
  &&& {
    padding-top: 16px;
    padding-bottom: 16px;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
    border-radius: 0 0 15px 15px;
  }
`;


export const StyledAccordionContent = styled(AccordionContent)`
  &&& {
    padding-top: 16px;
    padding-bottom: 16px;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
  }
`;