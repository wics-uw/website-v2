import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import sponsorStrings from '../../res/sponsorsStrings';
import {InterestedLine, Email, SponsorType, SponsorImg, ImgWrapper, SponsorImgTop, SponsorImgBottom, More, MoreBold, MoreWrapper, Interested, LearnMore} from './styles';
import google from '../../res/images/sponsors/google.svg';
import wish from '../../res/images/sponsors/wish.svg';
import amazon from '../../res/images/sponsors/amazon.svg';
import facebook from '../../res/images/sponsors/facebook.svg';
import mef from '../../res/images/sponsors/mef.svg';
import sap from '../../res/images/sponsors/sap.svg';
import zynga from '../../res/images/sponsors/zynga.svg';
import splunk from '../../res/images/sponsors/splunk.svg';
import yelp from '../../res/images/sponsors/yelp.svg';
//import illustration from '../../res/images/sponsors/illustration.svg';


//import SponsorImg from '../../components/'

class Sponsors extends Component {
    render (){
        const platinumSponsors ={
            s1: google,
            s2: wish
        };

        const goldSponsors = {
            s1: amazon,
            s2: facebook,
            s3: mef,
            s4: sap,
            s5: zynga,
            s6: splunk,
            s7: yelp
        };
        return (
            <div>
                {/* Sponsors title and Description*/}
                <SectionTitleDescription
                title={sponsorStrings.title}
                description={sponsorStrings.description}/>
                {/* 'Interested in...' and email */}
                <InterestedLine>
                    {sponsorStrings.interestedText}
                    <Email>
                    {sponsorStrings.email}
                    </Email>
                </InterestedLine>
                {/* Platinum Heading */}
                <SponsorType>
                    {sponsorStrings.platinum}
                </SponsorType>
                {/* Picutures of Platinum Sponsors*/}
                {Object.entries(platinumSponsors).map(([key, name]) => (
                    <ImgWrapper><SponsorImg src={name} alt=''/> </ImgWrapper>
                ))}
                
                 {/* Gold Heading */}
                <SponsorType>
                    {sponsorStrings.gold}
                </SponsorType>
                {/* Picutures of Gold Sponsors*/}
                {Object.entries(goldSponsors).map(([key, name]) => (
                    
                    <ImgWrapper>{name===facebook?
                        <SponsorImgTop src={name} alt=''/> : name===yelp? <SponsorImgBottom src={name} alt=''/>
                    : <SponsorImg src={name} alt=''/> }</ImgWrapper>
                ))}

                {/* More Sponsors and call to action button */}
                <MoreWrapper>
                <More>... and <MoreBold href={'https://cs.uwaterloo.ca/wics'} target='_blank'> many more</MoreBold>!</More>

                <Interested> {sponsorStrings.interested}</Interested>
                    <LearnMore href={'https://cs.uwaterloo.ca/sites/ca.computer-science/files/uploads/files/wics-sponsorship-case-for-support.pdf'} target ='_blank'>
                         {sponsorStrings.learnMore}</LearnMore>
                </MoreWrapper>
                
            </div>
        )
    }
}

export default Sponsors;