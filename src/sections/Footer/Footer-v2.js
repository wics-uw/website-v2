import React, { Component } from "react";
import {
  StyledFooterWrapper,
  StyledCopyright,
  StyledTitleLeft,
  StyledTextLeft,
  StyledTitleRight,
  StyledLinkRight,
} from "./styles-v2";
import { Grid, Divider } from "semantic-ui-react";
import footerStrings from "../../res/footerStrings";

class FooterV2 extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <Grid>
          <Grid.Row>
            <Grid.Column width={9}>
              <StyledTitleLeft>{footerStrings.title.la}</StyledTitleLeft>
              <StyledTextLeft>{footerStrings.description.la}</StyledTextLeft>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={5}>
              <StyledTitleRight>{footerStrings.title.lk}</StyledTitleRight>
              <ul style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0px"}}>
                <li>
                  <StyledLinkRight href={footerStrings.links.lk1}>
                    {footerStrings.description.lk1}
                  </StyledLinkRight>
                </li>
                <li>
                  <StyledLinkRight href={footerStrings.links.lk2}>
                    {footerStrings.description.lk2}
                  </StyledLinkRight>
                </li>
                <li>
                  <StyledLinkRight href={footerStrings.links.lk3}>
                    {footerStrings.description.lk3}
                  </StyledLinkRight>
                </li>
                <li>
                  <StyledLinkRight href={footerStrings.links.lk4}>
                    {footerStrings.description.lk4}
                  </StyledLinkRight>
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <StyledCopyright>
          &copy; {footerStrings.copyright} {new Date().getFullYear()}{" "}
        </StyledCopyright>
      </StyledFooterWrapper>
    );
  }
}

export default FooterV2;
