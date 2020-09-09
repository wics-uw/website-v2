import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import studentStrings from '../../res/strings/littleWicsStrings';
import {
  AllOfficeHourWrapper,
  ImageColumn,
  OfficeHour,
  OfficeHourWrapper,
  StudentCardGrid,
  StyledImage,
  StyledLink,
  TextColumnL,
  TextColumnR
} from './styles';
import LittleWicsCardText from '../../components/LittleWicsCardText/LittleWicsCardText';
import officeHour from '../../res/images/little_wics_office_hours.png';
import mentorship from '../../res/images/little_wics_mentorship.png';
import community from '../../res/images/little_wics_community.png';
import {StyledSubSectionWrapper} from '../../res/globalStyles';


//LittleWics Events Component
class LittleWics extends Component {
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
    return (
      <StyledSubSectionWrapper>
        {/* Title and Description*/}
        <SectionTitleDescription
          title={studentStrings.title}
          description={studentStrings.description}/>
        <StudentCardGrid>
          {/* 1st Card Image*/}
          <ImageColumn computer={5} mobile={10}>
            <StyledImage src={officeHour}/>
          </ImageColumn>
          <TextColumnR computer={11} mobile={14}>
            {/* 1st Text*/}
            <LittleWicsCardText
              title={studentStrings.officeHours.title}
              description={studentStrings.officeHours.description}/>
            <AllOfficeHourWrapper>
              <OfficeHourWrapper>{screenWidth <= 425 ? "MON" : "MONDAY"}
                <OfficeHour>{studentStrings.officeHours.mon}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>{screenWidth <= 425 ? "TUE" : "TUESDAY"}
                <OfficeHour>{studentStrings.officeHours.tues}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>{screenWidth <= 425 ? "WED" : "WEDNESDAY"}
                <OfficeHour>{studentStrings.officeHours.wed}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>{screenWidth <= 425 ? "THUR" : "THURSDAY"}
                <OfficeHour>{studentStrings.officeHours.thurs}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>{screenWidth <= 425 ? "FRI" : "FRIDAY"}
                <OfficeHour>{studentStrings.officeHours.fri}</OfficeHour></OfficeHourWrapper>
            </AllOfficeHourWrapper>
          </TextColumnR>
        </StudentCardGrid>

        {/* 2nd Card*/}
        <StudentCardGrid reversed='computer' only='computer'>
          <ImageColumn computer={5} mobile={10}>
            <StyledImage src={mentorship}/>
          </ImageColumn>
          <TextColumnL computer={11} mobile={14}>
            {/* 2nd Card Text*/}
            <LittleWicsCardText
              title={studentStrings.careerMentorship.title}
              description={
                <>
                  {studentStrings.careerMentorship.description1}
                  <StyledLink
                    href={studentStrings.careerMentorship.bigCSterLink}>{studentStrings.careerMentorship.description2}</StyledLink>
                  {studentStrings.careerMentorship.description3}
                </>}
            />
          </TextColumnL>
          {/* 2nd Card Image*/}
        </StudentCardGrid>

        {/* 3rd Card */}
        <StudentCardGrid>
          {/* 3rd Card Image*/}
          <ImageColumn computer={5} mobile={10}>
            <StyledImage src={community}/>
          </ImageColumn>
          {/* 3rd Card Text*/}
          <TextColumnR computer={11} mobile={14}>
            <LittleWicsCardText
              title={studentStrings.community.title}
              description={studentStrings.community.description}/>
          </TextColumnR>
        </StudentCardGrid>
      </StyledSubSectionWrapper>
    )
  }
}

export default LittleWics;

