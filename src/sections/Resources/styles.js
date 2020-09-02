import styled from 'styled-components';
import { Accordion, AccordionContent, Icon, Image } from 'semantic-ui-react';

//stles for the text in the Accordion title
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

//styles for accordion wrapper
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

//styles for chevron icon
export const StyledIcon = styled(Icon)`
&&& {
    display: inline;
    float: right;
    margin-top: 8px;
    color: black;
}
`;

//styles around the link
export const LinksWrapper = styled.div`
&&& {
    margin-left: 16px;
    padding-top: 8px;
}
`;

//styles for the link name
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

//styles for the image
export const Illustration = styled(Image)`
&&& {
    float: right;
    margin-left: 20px;
}
`;

//styles for the content wrapper
export const ContentWrapper = styled.div`
&&& {
    margin-bottom: 40px;
}
`;

//clear to break the floats above
export const Clear = styled.div`
&&& {
    clear: both;
}
`;

//styles for the acoordion
export const StyledAccordion = styled(Accordion)`
    &&&{
        border-radius: 15px;
        background: #FFFFFF;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

//styles for the accordion content
export const StyledAccordionContentR = styled(AccordionContent)`
  &&& {
    padding-top: 8px !important;
    padding-bottom: 16px !important;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
    border-radius: 0 0 15px 15px;
  }
`;

//styles for the accordion content
export const StyledAccordionContent = styled(AccordionContent)`
  &&& {
    padding-top: 8px !important;
    padding-bottom: 16px !important;
    border-left: 3px solid #E7BEB2;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(231,190,178, 0.15);
  }
`;
