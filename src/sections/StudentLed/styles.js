import styled from "styled-components";
import {Image} from 'semantic-ui-react';

export const StudentImgL = styled(Image)`
&&& {
    float: left;
    margin-right: 50px;
}
`;

export const StudentImgR = styled(Image)`
&&& {
    float: right;
    margin-left: 50px;
}
`;

export const OfficeHour = styled.body`
&&&{
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;    
}
`;

export const StudentTextWrapper = styled.div`
&&&{
    display: flex;
    flex-direction: column;
}`;

export const StudentTextWrapperR = styled.div`
&&&{
    width: 539px;    
    float: right;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
}
`;


export const StudentTextWrapperL = styled.div`
&&&{
    width: 539px;    
    float: left;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
}
`;


export const StudentCard = styled.div`
&&&{
    margin-top: 40px;
    margin-bottom: 40px;
    clear: both;
    height: 238px;
}
`;

