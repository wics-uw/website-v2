import styled from 'styled-components';
import {Card} from 'semantic-ui-react';

export const CardWrapper = styled(Card)`
&&&{
    height: 223px;
    width: 259px;
    : hover {
		transform: translate(0,-3px);
	}
}
`;

export const ImageWrapper = styled.div`
&&& {
    margin-left: 24px;
    margin-top: 24px;
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
    margin-left: 24px;
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
    width: 215px;
    margin-left: 24px;
    
}
`;



