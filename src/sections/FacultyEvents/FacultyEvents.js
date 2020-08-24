import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import facultyStrings from '../../res/facultyStrings';
import {GridColumn} from 'semantic-ui-react';
import {StyledEventsWrapper} from './styles';
import FacultyCard from '../../components/FacultyCard/FacultyCard';
import sponsored from '../../res/images/sponsored.svg';
import outreach from '../../res/images/sponsored.svg';
import techConference from '../../res/images/sponsored.svg';

class FacultyEvents extends Component {
    render () {
        return (
            <div>
                <SectionTitleDescription 
                title={facultyStrings.title}
                description={facultyStrings.description}/>
                <StyledEventsWrapper columns={3}>
                    <GridColumn>
                        <FacultyCard
                            title={facultyStrings.sponsored.title}
                            image={sponsored}
                            descriptionShort={facultyStrings.sponsored.description}
                        />
                    </GridColumn>
                    <GridColumn>
                        <FacultyCard
                            title={facultyStrings.tech.title}
                            image={techConference}
                            descriptionShort={facultyStrings.tech.description}
                        />
                    </GridColumn>
                    <GridColumn>
                        <FacultyCard
                            title={facultyStrings.outreach.title}
                            image={outreach}
                            descriptionShort={facultyStrings.outreach.description}
                        />
                    </GridColumn>
                </StyledEventsWrapper>
            </div>
        )
    }
}

export default FacultyEvents;