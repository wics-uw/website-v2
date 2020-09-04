import styled from 'styled-components';
import {Card} from 'semantic-ui-react';

export const CardWrapper = styled(Card)`
&&&{
    height: 200px !important;
    width: 348px !important;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    margin : 0 0 0 0 !important;
    padding: 0 0 0 0 !important;
    border-radius: 10px;
    : hover {
		transform: translate(0,-3px);
	}
}
`;

export const ImageWrapper = styled.div`
&&& {
    margin-left: 22px;
    margin-top: 26px;
    margin-bottom: 12px;
}
`;


export const EventTitle = styled.label`
&&& {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    margin-left: 22px;
    margin-bottom: 8px;
}
`;


export const EventDescription = styled.body`
&&&{
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    min-width: 215px;
    width: 300px;
    margin-left: 22px;
    
}
`;



