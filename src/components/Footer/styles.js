import styled from "styled-components";
import { Image } from "semantic-ui-react";

export const StyledLogo = styled(Image)`
  &&& {
    width: 30px;
    margin: 20px 20px 20px 100px;
    border: 95px;
  }
`;

export const StyledText = styled.div`
  &&& {
    margin: 20px;
    font-size: 16px;
  }
`;

export const StyledFooterWrapper = styled.div`
  &&& {
    flex-shrink: 0;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
    color: white;
    background-color: #4a607b;
    font-size: 16px;
  }
`;

export const StyledEmail = styled.div`
  &&& {
    margin: 0px;
    font-size: 26px;
    text-align: center;
  }
`;

export const StyledColumnWrapper = styled.div`
  &&& {
    margin: 16px;
    padding: 0px 400px 20px;
  }
`;

export const StyledRow = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 15px;
  }
`;

export const StyledColumn = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    font-size: 12px;
    height: 25px;
    margin: 15px;
  }
`;

export const StyledCopyright = styled.div`
  &&& {
    margin: 20px;
    font-size: 12px;
  }
`;
