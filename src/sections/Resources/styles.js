import styled from 'styled-components';
import { Accordion, Icon, Image} from 'semantic-ui-react';

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
    margin-bottom: 4px;
    margin-top: 4px;
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