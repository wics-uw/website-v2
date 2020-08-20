// Styles for the card image
import styled from "styled-components";
import { Image, Container } from "semantic-ui-react";

export const PastExecWrapper = styled(Image)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledCardImage = styled(Image)`
  &&& {
    border-radius: 20px;
  }
`;
