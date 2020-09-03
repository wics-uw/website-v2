import styled from "styled-components";
import {Button, Grid, GridColumn} from "semantic-ui-react";

//styles for the sponsor type
export const SponsorTierWrapper = styled.div`
  &&& {
    margin-bottom: 32px;
  }
`;

//styles for the sponsor type 
export const SponsorType = styled.h4`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
    background-color: transparent;
    color: #000000;
  }
`;

//styles for the sponsor image
export const SponsorImg = styled.img`
  &&& {
    vertical-align: middle;
    margin-right: 16px;
  }
`;

export const StyledSponsorLinkTypeWrapper = styled.div`
  &&& {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

//styles for the sponsor type for links
export const SponsorTypeLink = styled.h3`
  &&& {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
  }
`;

//styles for the grid
export const StyledGrid = styled(Grid)`
  &&& {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

//styles for grid columns for hyperlinks
export const StyledGridColumnL = styled(GridColumn)`
  &&& {
    padding-right: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 16px !important;
  }
`;

// styles for the text of hyperlinks in more sponsors
export const StyledLink = styled.a`
  &&& {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    padding: 0;
    background-color: transparent;
  }
`;

//styles for wrapper around button and surrounding text
export const MoreWrapper = styled.div`
  &&& {
    text-align: center;
    margin-top: 60px;
  }
`;

//styles for the 'want to get involved' text
export const Interested = styled.h4`
  &&& {
    margin-bottom: 16px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #000000;
  }
`;

//styles for the learn More button
export const LearnMore = styled(Button)`
  &&& {
    width: 147px;
    height: 43px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    background: #49657F;
    border-radius: 42px;
  }
`;
