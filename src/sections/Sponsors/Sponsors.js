import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import sponsorStrings from '../../res/strings/sponsorsStrings';
import {Interested, LearnMore, MoreWrapper} from './styles';
import wish from '../../res/images/sponsors/wish.svg';
import zynga from '../../res/images/sponsors/zynga.svg';
import bam from '../../res/images/sponsors/bam.svg';
import balyansy from '../../res/images/sponsors/balyasny.svg';
import citadel from '../../res/images/sponsors/citadel.svg';
import google from '../../res/images/sponsors/google.svg';
import opentext from '../../res/images/sponsors/opentext.svg';
import hrt from '../../res/images/sponsors/hrt.svg';
import manulife from '../../res/images/sponsors/manulife.svg';
import hoopp from '../../res/images/sponsors/hoopp.svg';
import avanade from '../../res/images/sponsors/avanade.svg';
import microsoft from '../../res/images/sponsors/microsoft.svg';
import scotiabank from '../../res/images/sponsors/scotiabank.svg';
import janestreet from '../../res/images/sponsors/janestreet.svg';
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
        logo: manulife,
        name: "Manulife",
        link: 'https://www.manulife.ca/about-us.html'
      },
      s2: {
        logo: citadel,
        name: "Citadel",
        link: 'https://www.citadel.com/'
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
        logo: janestreet,
        name: "Jane Street",
        link: 'https://www.janestreet.com/'
      },
      s5: {
        logo: balyansy,
        name: "Balyansy Asset Management",
        link: 'https://www.bamfunds.com/'
      },
    };

    //dictionary of silver sponsors and their links
    const silverSponsors = {
      s1: {
        logo: avanade,
        name: 'Avanade',
        link: 'https://www.avanade.com/en-ca'
      },
      s2: {
        logo: microsoft,
        name: 'Microsoft',
        link: 'https://www.microsoft.com/en-ca'
      },
      s3: {
        logo: zynga,
        name: 'Zynga',
        link: 'https://www.zynga.com/',
      },
      s4: {
        logo: hoopp,
        name: 'HOOPP',
        link: 'https://hoopp.com/',
        
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

        {/* Silver sponsors moved outside of the accordion */}
        <SponsorTierCard type={sponsorStrings.silver} sponsors={silverSponsors} />

    
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