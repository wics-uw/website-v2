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
  render() {
    return (
      <StyledSubSectionWrapper>
        {/* Title and Description*/}
        <SectionTitleDescription
          title={studentStrings.title}
          description={studentStrings.description}/>
        <StudentCardGrid>
          {/* 1st Card Image*/}
          <ImageColumn width={5}>
            <StyledImage src={officeHour}/>
          </ImageColumn>
          <TextColumnR width={11}>
            {/* 1st Text*/}
            <LittleWicsCardText
              title={studentStrings.officeHours.title}
              description={studentStrings.officeHours.description}/>
            <AllOfficeHourWrapper>
              <OfficeHourWrapper>MONDAY <OfficeHour>{studentStrings.officeHours.mon}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>TUESDAY <OfficeHour>{studentStrings.officeHours.tues}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>WEDNESDAY <OfficeHour>{studentStrings.officeHours.wed}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>THURSDAY <OfficeHour>{studentStrings.officeHours.thurs}</OfficeHour></OfficeHourWrapper>
              <OfficeHourWrapper>FRIDAY <OfficeHour>{studentStrings.officeHours.fri}</OfficeHour></OfficeHourWrapper>
            </AllOfficeHourWrapper>
          </TextColumnR>
        </StudentCardGrid>

        {/* 2nd Card*/}
        <StudentCardGrid>
          <TextColumnL width={11}>
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
          <ImageColumn width={5}>
            <StyledImage src={mentorship}/>
          </ImageColumn>
        </StudentCardGrid>

        {/* 3rd Card */}
        <StudentCardGrid>
          {/* 3rd Card Image*/}
          <ImageColumn width={5}>
            <StyledImage src={community}/>
          </ImageColumn>
          {/* 3rd Card Text*/}
          <TextColumnR width={11}>
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

