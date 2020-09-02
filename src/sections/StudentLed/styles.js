import styled from "styled-components";
import { Image } from 'semantic-ui-react';

//styles for image on left
export const StudentImgL = styled(Image)`
&&& {
    float: left;
    margin-right: 47.3px;
}
`;

//styles for image on eight
export const StudentImgR = styled(Image)`
&&& {
    float: right;
    margin-left: 47.3px;
}
`;

//styles for wrapper around office hours 
export const OfficeHourWrapper = styled.div`
&&&{
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;    
    width: 539px;
}
`;

//styles for office hour
export const OfficeHour = styled.div`
&&&{
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;  
    float: right;  
    display: inline;
    width: 400px;
}
`;

//styles for text wrapper for the first card
export const StudentTextWrapperOH = styled.div`
&&&{
    width: 672px;    
    float: right;
    margin-top: 10px;
}
`;

//styles for text wrapper for the second card
export const StudentTextWrapperCM = styled.div`
&&&{
    width: 672px;    
    float: left;
    margin-top: 60px;
    display: inline;
}
`;

//styles for text wrapper for the third card
export const StudentTextWrapperCB = styled.div`
&&&{
    width: 672px;    
    float: right;
    margin-top: 60px;
    display: inline;
}
`;

//styles for image and text
export const StudentCard = styled.div`
&&&{
    margin-top: 40px;
    margin-bottom: 40px;
    clear: both;
    height: 238px;
}
`;

