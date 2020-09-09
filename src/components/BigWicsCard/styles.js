import styled from 'styled-components';
import {Card} from 'semantic-ui-react';

export const CardWrapper = styled(Card)`
  &&& {
    height: 200px;
    width: 100%;
    padding: 24px !important;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
    &:hover {
		  transform: translate(0,-3px);
	  }
	  @media only screen and (max-width: 425px) {
      height: 160px;
      padding: 24px 16px !important;
      margin-bottom: 16px;
    }
  }
`;

export const ImageWrapper = styled.div`
  &&& {
    margin-bottom: 12px;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`;


export const EventTitle = styled.label`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 8px;
    @media only screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`;


export const EventDescription = styled.p`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    min-width: 100%;
    margin: 0;
    @media only screen and (max-width: 425px) {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
