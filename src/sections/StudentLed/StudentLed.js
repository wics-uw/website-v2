import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import studentStrings from '../../res/studentStrings';
import {StudentImgL, StudentImgR, OfficeHour, StudentTextWrapperR, StudentTextWrapperL, StudentCard, StudentTextWrapper } from './styles';
import StudentText from '../../components/StudentText/StudentText';
import officeHour from '../../res/images/student_officeHour.svg';
import careerMentor from '../../res/images/student_careerMentor.svg';
import community from '../../res/images/student_community.svg';



class StudentLed extends Component {
    render(){
        return (
            <div>
                <SectionTitleDescription 
                title={studentStrings.title}
                description={studentStrings.description} />
                <StudentCard>
                    <StudentImgL src={officeHour} />
                    <StudentTextWrapper>
                        <StudentTextWrapperR>
                        
                            <StudentText
                                title={studentStrings.officeHours.title}
                                description={studentStrings.officeHours.description}/>
                            <OfficeHour>MON: {studentStrings.officeHours.mon}</OfficeHour>
                            <OfficeHour>TUES: {studentStrings.officeHours.tues}</OfficeHour>
                            <OfficeHour>WED: {studentStrings.officeHours.wed}</OfficeHour>
                            <OfficeHour>THURS: {studentStrings.officeHours.thurs}</OfficeHour>
                            <OfficeHour>FRI: {studentStrings.officeHours.fri}</OfficeHour>
                        
                        </StudentTextWrapperR>
                    </StudentTextWrapper>
                </StudentCard>
                <StudentCard>
                    <StudentImgR src={careerMentor} />
                    <StudentTextWrapper>
                        <StudentTextWrapperL>
                            <StudentText
                                title={studentStrings.careerMentorship.title}
                                description={studentStrings.careerMentorship.description}/>
                        </StudentTextWrapperL>
                    </StudentTextWrapper>
                </StudentCard>
                <StudentCard>
                <StudentImgL src={community} />
                <StudentTextWrapper>
                    <StudentTextWrapperR>
                        <StudentText
                            title={studentStrings.community.title}
                            description={studentStrings.community.description}/>
                    </StudentTextWrapperR>
                </StudentTextWrapper>
                </StudentCard>
                <StudentCard></StudentCard>
            </div>
        )
    }
};

export default StudentLed;

