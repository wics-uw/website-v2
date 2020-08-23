import styled from "styled-components";
import {Button} from "semantic-ui-react";

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

//style for more sponsors text
export const More = styled.h4`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    horizontal-align: center;
  }
`;


// bolded style for more sponsors text
export const MoreBold = styled.a`
  &&& {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-decoration-line: underline;
    color: #000000;
  }
`;

//styles for the illustration 
export const Illustration = styled.img`
  &&& {
    float: right;
  }
`;

//styles for the sponsor image 
export const SponsorImg = styled.img`
  &&& {
    vertical-align: middle;
  }
`;

//styles for the sponsor image 
export const SponsorImgTop = styled.img`
  &&& {
    vertical-align: top;
  }
`;

//styles for the sponsor image 
export const SponsorImgBottom = styled.img`
  &&& {
    vertical-align: bottom;
  }
`;

//styles for the wrapper of the sponsor image 
export const ImgWrapper = styled.span`
  &&& {
    height: 300px;
    width: 250px;
    text-align: center;
    margin-left: 38px;
    margin-bottom: 10px;
    border: black;
  }
`;

