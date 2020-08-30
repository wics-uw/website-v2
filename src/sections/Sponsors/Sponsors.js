import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import sponsorStrings from '../../res/sponsorsStrings';
import {StyledChevronIcon, StyledAccordion, StyledTitle, SponsorType, SponsorTypeLink, SponsorImg, ImgWrapper, SponsorsWrapper, ColorLine, BackColor, StyledLink, MoreWrapper, Interested, LearnMore} from './styles';
import google from '../../res/images/sponsors/google.svg';
import wish from '../../res/images/sponsors/wish.svg';
import amazon from '../../res/images/sponsors/amazon.svg';
import facebook from '../../res/images/sponsors/facebook.svg';
import mef from '../../res/images/sponsors/mef.svg';
import sap from '../../res/images/sponsors/sap.svg';
import zynga from '../../res/images/sponsors/zynga.svg';
import splunk from '../../res/images/sponsors/splunk.svg';
import yelp from '../../res/images/sponsors/yelp.svg';
import loblaws from '../../res/images/sponsors/loblaws.png';
import {Accordion, AccordionContent, AccordionTitle, Grid, Image, GridColumn} from "semantic-ui-react";
//import illustration from '../../res/images/sponsors/illustration.svg';


//import SponsorImg from '../../components/'

class Sponsors extends Component {
    state = {
        active: false
      };
    
      handleClick = () => {
        this.setState({
          active: !this.state.active
        })
      };

    render (){

        const {active} = this.state;

        const platinumSponsors ={
            s1: {
                name: google,
                link: 'https://about.google/'
            },
            s2: {
                name: loblaws,
                link: ''
            },
            s3: {
                name: wish,
                link: 'https://www.wish.com/careers?hide_login_modal=true'
            },
        };

        const goldSponsors = {
            s1: {
                name: amazon,
                link: 'https://www.aboutamazon.com/'
            },
            s2: {
                name: facebook,
                link: 'https://about.fb.com/news/'
            },
            s3: {
                name: splunk,
                link: 'https://www.splunk.com/'
            },
            s4: {
                name: yelp,
                link: 'https://www.yelp.com/about'
            },
            s5: {
                name: zynga,
                link: 'https://www.zynga.com/'
            }
        };

        const silverSponsors = {
            s1: {
                name: 'A Thinking Ape',
                link: 'https://www.athinkingape.com/'
            },
            s2: {
                name: 'DataDog',
                link:' https://www.datadoghq.com/'
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
            <SponsorsWrapper>
                {/* Sponsors title and Description*/}
                <SectionTitleDescription
                title={sponsorStrings.title}
                description={sponsorStrings.description}/>
                {/* Platinum Heading */}
                <SponsorType>
                    {sponsorStrings.platinum}
                </SponsorType>
                {/* Picutures of Platinum Sponsors*/}
                <Grid columns={4}>
                {Object.entries(platinumSponsors).map(([key, name]) => (
                    <GridColumn>
                    {name.link === ''? <ImgWrapper><SponsorImg src={name.name} alt=''/> </ImgWrapper>: 
                    (<a href = {name.link} target ='_blank'> 
                    <ImgWrapper><SponsorImg src={name.name} alt=''/> </ImgWrapper>
                    </a>)}
                    </GridColumn>
                ))}
                </Grid>
                
                 {/* Gold Heading */}
                <SponsorType>
                    {sponsorStrings.gold}
                </SponsorType>
                {/* Picutures of Gold Sponsors*/}
                <Grid columns={4}>
                {Object.entries(goldSponsors).map(([key, name]) => (
                    <GridColumn>
                    {name.link === ''? <ImgWrapper><SponsorImg src={name.name} alt=''/> </ImgWrapper>: 
                    (<a href = {name.link} target ='_blank'> 
                    <ImgWrapper><SponsorImg src={name.name} alt=''/> </ImgWrapper>
                    </a>)}
                    </GridColumn>
                ))}
                </Grid>

                {/* Accordian for sponsors*/}
                <StyledAccordion styled>
                <AccordionTitle
                    active={active}
                    onClick={this.handleClick}>
                    <StyledTitle>
                    More Sponsors
                    {active
                        ? <StyledChevronIcon size='small' name='chevron down'/>
                        : <StyledChevronIcon size='small' name='chevron right'/>}
                    </StyledTitle>
                </AccordionTitle>
                <AccordionContent active={active}>
                    <div>
                        <ColorLine></ColorLine>
                    <BackColor>
                   
                    <SponsorTypeLink>
                        SILVER
                    </SponsorTypeLink>
                    <Grid columns={6}>
                    {Object.entries(silverSponsors).map(([number, name]) => (
                        <GridColumn>
                        <a href={name.link} target='_blank'><StyledLink>{name.name}</StyledLink></a>
                        </GridColumn>
                    ))}
                    </Grid>

                    <SponsorTypeLink>
                        LOCAL
                    </SponsorTypeLink>
                    <Grid columns={6}>
                    {Object.entries(localSponsors).map(([number, name]) => (
                        <GridColumn>
                        <StyledLink href={name.link} target='_blank'>{name.name}</StyledLink>
                        </GridColumn>
                    ))}
                    </Grid>
                    </BackColor>
                    </div>
             </AccordionContent>
                </StyledAccordion>
                



                {/* Call to action button */}
                <MoreWrapper>

                <Interested> {sponsorStrings.interested}</Interested>
                    <LearnMore href={'https://cs.uwaterloo.ca/wics'} target ='_blank'>
                         {sponsorStrings.learnMore}</LearnMore>
                </MoreWrapper>
                
            </SponsorsWrapper>
        )
    }
}

export default Sponsors;