import styled from 'styled-components';
import {Card} from 'semantic-ui-react';

export const CardWrapper = styled(Card)`
&&&{
    height: 298px;
    width: 291px;
}
`;

export const ImageWrapper = styled.div`
&&& {
    position: relative;
    display: inline-block;
}
`;

export const TextWrapper = styled.div`
&&& {
    position: absolute;
    z-index: 999;
    margin: 0 auto;
    left: 15px;
    bottom: 15px;
}
`;

export const EventTitle = styled.label`
&&& {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
}
`;


export const EventDescription = styled.body`
&&&{
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    min-width: 260px;
    padding: 0 0;
    
}
`;


export const DescriptionWrapper = styled.div`
&&&{
    margin: 5%;
    border = "thick solid #000000";
}
`;

