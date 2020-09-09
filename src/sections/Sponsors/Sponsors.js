import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import sponsorStrings from '../../res/strings/sponsorsStrings';
import {Interested, LearnMore, MoreWrapper} from './styles';
import google from '../../res/images/sponsors/google.svg';
import wish from '../../res/images/sponsors/wish.svg';
import amazon from '../../res/images/sponsors/amazon.svg';
import facebook from '../../res/images/sponsors/facebook.svg';
import zynga from '../../res/images/sponsors/zynga.svg';
import splunk from '../../res/images/sponsors/splunk.svg';
import yelp from '../../res/images/sponsors/yelp.svg';
import loblaws from '../../res/images/sponsors/loblaws.svg';
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import CustomAccordion from "../../components/CustomAccordion/CustomAccordion";
import SponsorTierCard from "../../components/SponsorTierCard/SponsorTierCard";
import SponsorLinkCard from "../../components/SponsorLinkCard/SponsorLinkCard";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {screenWidth: null};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        logo: google,
        name: "Google",
        link: 'https://about.google/'
      },
      s2: {
        logo: loblaws,
        name: "Loblaws",
        link: ''
      },
      s3: {
        logo: wish,
        name: "Wish",
        link: 'https://www.wish.com/careers?hide_login_modal=true'
      },
    };

    //dictionary of gold sponsors and their pictures and links
    const goldSponsors = {
      s1: {
        logo: amazon,
        name: "Amazon",
        link: 'https://www.aboutamazon.com/'
      },
      s2: {
        logo: facebook,
        name: "Facebook",
        link: 'https://about.fb.com/news/'
      },
      s3: {
        logo: splunk,
        name: "Splunk",
        link: 'https://www.splunk.com/'
      },
      s4: {
        logo: yelp,
        name: "Yelp",
        link: 'https://www.yelp.com/about'
      },
      s5: {
        logo: zynga,
        name: "Zynga",
        link: 'https://www.zynga.com/'
      }
    };

    //dictionary of silver sponsors and their links
    const silverSponsors = {
      s1: {
        name: 'A Thinking Ape',
        link: 'https://www.athinkingape.com/'
      },
      s2: {
        name: 'DataDog',
        link: ' https://www.datadoghq.com/'
      },
      s3: {
        name: 'Flexport',
        link: 'https://www.flexport.com/'
      },
      s4: {
        name: 'Oracle',
        link: 'https://www.netsuite.com/portal/home.shtml?noredirect=T'
      },
      s5: {
        name: 'Shopify',
        link: 'https://www.shopify.ca/'
      },
      s6: {
        name: 'Pinterest',
        link: 'https://newsroom.pinterest.com/en/company'
      },
      s7: {
        name: 'Sumo Logic',
        link: 'https://www.sumologic.com/'
      },
      s8: {
        name: 'The Co-operators',
        link: 'https://www.cooperators.ca/en.aspx'
      },
      s9: {
        name: 'Ubisoft',
        link: 'https://www.ubisoft.com/en-ca/?isSso=true&refreshStatus=noLoginData'
      },
    };

    //dictionary of local sponsors and their links
    const localSponsors = {
      s1: {
        name: 'Arctic Wolf',
        link: 'https://arcticwolf.com/'
      },
      s2: {
        name: 'Square',
        link: 'https://squareup.com/ca/en'
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
          <SponsorLinkCard
            type={sponsorStrings.local}
            sponsors={localSponsors}/>
        </CustomAccordion>

        {/* Call to action button */}
        <MoreWrapper>
          <Interested> {sponsorStrings.interested}</Interested>
          <LearnMore href={sponsorStrings.learnMoreLink} target='_blank'>
            {sponsorStrings.learnMore}
          </LearnMore>
        </MoreWrapper>

      </StyledSubSectionWrapper>
    )
  }
}

export default Sponsors;