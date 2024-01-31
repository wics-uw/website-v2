import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import sponsorStrings from '../../res/strings/sponsorsStrings';
import {Interested, LearnMore, MoreWrapper} from './styles';
import wish from '../../res/images/sponsors/wish.svg';
import zynga from '../../res/images/sponsors/zynga.svg';
import bam from '../../res/images/sponsors/bam.svg';
import citadel from '../../res/images/sponsors/citadel.svg';
import google from '../../res/images/sponsors/google.svg';
import opentext from '../../res/images/sponsors/opentext.svg';
import hrt from '../../res/images/sponsors/hrt.svg';
import meta from '../../res/images/sponsors/meta.svg';
import scotiabank from '../../res/images/sponsors/scotiabank.svg';
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import CustomAccordion from "../../components/CustomAccordion/CustomAccordion";
import SponsorTierCard from "../../components/SponsorTierCard/SponsorTierCard";
import SponsorLinkCard from "../../components/SponsorLinkCard/SponsorLinkCard";
import ReactGA from 'react-ga';

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {screenWidth: null};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  //functions to track click on learn more button
  LearnMoreClickHandler = () => {
    ReactGA.event ({
      category: 'Sponsors',
      action: 'Clicked Sponsor Learn More Button'
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({screenWidth: window.innerWidth});
  }

  render() {
    const {screenWidth} = this.state;
    //dictionary of platinum sponsors and their pictures and links
    const platinumSponsors = {
      s1: {
        logo: scotiabank,
        name: "Scotiabank",
        link: 'https://www.scotiabank.com/ca/en/personal.html'
      },
      s2: {
        logo: bam,
        name: "Balyansy Asset Management",
        link: 'https://www.bamfunds.com/'
      },
      s3: {
        logo: citadel,
        name: "Citadel",
        link: 'https://www.citadel.com/'
      },
      s4: {
        logo: wish,
        name: "Wish",
        link: 'https://www.wish.com/careers?hide_login_modal=true'
      },
    };

    //dictionary of gold sponsors and their pictures and links
    const goldSponsors = {
      s1: {
        logo: google,
        name: "Google",
        link: 'https://about.google/'
      },
      s2: {
        logo: hrt,
        name: "Hudson River Trading",
        link: 'https://www.hudsonrivertrading.com/'
      },
      s3: {
        logo: opentext,
        name: "Opentext",
        link: 'https://www.opentext.com/'
      },
      s4: {
        logo: zynga,
        name: "Zynga",
        link: 'https://www.zynga.com/'
      },
      s5: {
        logo: meta,
        name: "Meta",
        link: 'https://about.meta.com/metaverse/'
      },
    };

    //dictionary of silver sponsors and their links
    const silverSponsors = {
      s1: {
        name: 'Avanade',
        link: 'https://www.avanade.com/en-ca'
      },
      s2: {
        name: 'Microsoft',
        link: 'https://www.microsoft.com/en-ca'
      },
    };


    return (
      <StyledSubSectionWrapper>
        {/* Sponsors title and Description*/}
        <SectionTitleDescription
          title={sponsorStrings.title}
          description={sponsorStrings.description}/>

        <SponsorTierCard
          type={sponsorStrings.platinum}
          sponsors={platinumSponsors}/>
        {/*Only show gold on laptop size*/}
        {screenWidth <= 425
          ? <></>
          : <SponsorTierCard
            type={sponsorStrings.gold}
            sponsors={goldSponsors}/>}

        <CustomAccordion title={sponsorStrings.accordionTitle}>
          {/*Only show gold here on mobile size*/}
          {screenWidth <= 425
            ? <SponsorLinkCard
              type={sponsorStrings.gold}
              sponsors={goldSponsors}/>
            : <></>}
          <SponsorLinkCard
            type={sponsorStrings.silver}
            sponsors={silverSponsors}/>
        </CustomAccordion>

        {/* Call to action button */}
        <MoreWrapper>
          <Interested> {sponsorStrings.interested}</Interested>
          <LearnMore href={sponsorStrings.learnMoreLink} target='_blank' onClick={this.LearnMoreClickHandler}>
            {sponsorStrings.learnMore}
          </LearnMore>
        </MoreWrapper>

      </StyledSubSectionWrapper>
    )
  }
}

export default Sponsors;