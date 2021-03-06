import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import resourcesStrings from '../../res/strings/resourcesStrings';
import {Grid, GridColumn} from 'semantic-ui-react';
import {StyledAccordion} from './styles';
import {StyledSectionText, StyledSubSectionWrapper} from '../../res/globalStyles';
import resourceImg from "../../res/images/resource.svg";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import strings from "../../res/strings/strings";
import ResourcesAccordion from "../../components/ResourcesAccordion/ResourcesAccordion";

//resources component
export default class Resources extends Component {
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
        {/*the accordion */}
        <Grid columns={2}>
          <GridColumn computer={7} mobile={16}>
            <StyledSectionText>{strings.resources}</StyledSectionText>
            <SectionTitleDescription title={resourcesStrings.title} description=''/>
            <StyledAccordion fluid styled>
              <ResourcesAccordion
                index={0}
                first="true"
                title={resourcesStrings.wicsTitle}
                content={resourcesStrings.wicsLinks}/>
              <ResourcesAccordion
                index={1}
                title={resourcesStrings.conferenceTitle}
                content={resourcesStrings.conferenceLinks}/>
              <ResourcesAccordion
                index={2}
                title={resourcesStrings.womenTitle}
                content={resourcesStrings.womenLinks}/>
              <ResourcesAccordion
                index={3}
                last="true"
                title={resourcesStrings.additionalTitle}
                content={resourcesStrings.additionLinks}/>
            </StyledAccordion>
          </GridColumn>
          {screenWidth <= 425
            ? <></>
            :
            <GridColumn computer={9} mobile={11}>
              <Image src={resourceImg}/>
            </GridColumn>}
        </Grid>
      </StyledSubSectionWrapper>
    )
  }
}
