import React, {Component} from "react";
import {
  StyledCopyright,
  StyledFooterContentContainer,
  StyledFooterWrapper,
  StyledLink,
  StyledList,
  StyledSocialColumn,
  StyledSocialContainer,
  StyledSocialGrid,
  StyledText,
  StyledTextColumn,
  StyledTextGrid,
  StyledTextItalic,
  StyledTitle,
  StyledTitleLink,
} from "./styles";
import {GridColumn, Image} from "semantic-ui-react";
import footerStrings from "../../res/footerStrings";

import fb_logo from "../../res/images/footer_fb_logo.svg";
import linkedin_logo from "../../res/images/footer_linkedin_logo.svg";
import insta_logo from "../../res/images/footer_insta_logo.svg";
import discord_logo from "../../res/images/footer_discord_logo.svg";
import email from "../../res/images/footer_email.svg";

class Footer extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <StyledFooterContentContainer>
          <StyledTextGrid>
            <GridColumn width={4}>
              <StyledTitle>{footerStrings.title.addr}</StyledTitle>
              <StyledList>
                <li>
                  <StyledText>{footerStrings.description.a1}</StyledText>
                </li>
                <li>
                  <StyledText>{footerStrings.description.a2}</StyledText>
                </li>
                <li>
                  <StyledText>{footerStrings.description.a3}</StyledText>
                </li>
              </StyledList>
              <StyledList>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a4}
                  </StyledTextItalic>
                </li>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a5}
                  </StyledTextItalic>
                </li>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a6}
                  </StyledTextItalic>
                </li>
                <li>
                  <StyledTextItalic>
                    {footerStrings.description.a7}
                  </StyledTextItalic>
                </li>
              </StyledList>
            </GridColumn>

            <GridColumn width={7}>
              <StyledTitle>
                <StyledTitleLink href={footerStrings.links.pol}>
                  {footerStrings.title.la}
                </StyledTitleLink>
              </StyledTitle>
              <StyledText>{footerStrings.description.la}</StyledText>
            </GridColumn>

            <GridColumn width={2}>
              <StyledTitle>
                <StyledTitleLink href={footerStrings.links.pol}>
                  {footerStrings.title.pol}
                </StyledTitleLink>
              </StyledTitle>
              <StyledList>
                <li>
                  <StyledLink href={footerStrings.links.p1}>
                    {footerStrings.description.p1}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p2}>
                    {footerStrings.description.p2}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p3}>
                    {footerStrings.description.p3}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.p4}>
                    {footerStrings.description.p4}
                  </StyledLink>
                </li>
              </StyledList>
            </GridColumn>

            <GridColumn width={3}>
              <StyledTitle>{footerStrings.title.lk}</StyledTitle>
              <StyledList>
                <li>
                  <StyledLink href={footerStrings.links.lk1}>
                    {footerStrings.description.lk1}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.lk2}>
                    {footerStrings.description.lk2}
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href={footerStrings.links.lk3}>
                    {footerStrings.description.lk3}
                  </StyledLink>
                </li>
              </StyledList>
            </GridColumn>
          </StyledTextGrid>

          <StyledSocialContainer>
            <StyledSocialGrid columns={5}>
              <StyledSocialColumn>
                <Image
                  src={email}
                  href="mailto:wics.uw.ugrad@gmail.com"
                  target="_blank"
                />
              </StyledSocialColumn>
              <StyledSocialColumn>
                <Image
                  src={linkedin_logo}
                  href={footerStrings.links.social.lin}
                  target="_blank"
                />
              </StyledSocialColumn>
              <StyledSocialColumn>
                <Image
                  src={fb_logo}
                  href={footerStrings.links.social.fb}
                  target="_blank"
                />
              </StyledSocialColumn>
              <StyledSocialColumn>
                <Image
                  src={insta_logo}
                  href={footerStrings.links.social.insta}
                  target="_blank"
                />
              </StyledSocialColumn>
              <StyledSocialColumn>
                <Image
                  src={discord_logo}
                  href={footerStrings.links.social.disc}
                  target="_blank"
                />
              </StyledSocialColumn>
            </StyledSocialGrid>
          </StyledSocialContainer>

          <StyledCopyright>
            &copy; {footerStrings.copyright} {new Date().getFullYear()}
          </StyledCopyright>
        </StyledFooterContentContainer>
      </StyledFooterWrapper>
    );
  }
}

export default Footer;
