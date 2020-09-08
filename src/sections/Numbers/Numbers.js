import React, {Component} from 'react';
import NumbersTitleDescription from "../../components/NumbersTitleDescription/NumbersTitleDescription";
import numberStrings from "../../res/strings/numberStrings";
import NumberCard from "../../components/NumberCard/NumberCard";
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import {StyledGrid, StyledGridColumn} from "./styles";
import {StyledLink, StyledUpdate} from "../../components/NumbersTitleDescription/styles";

// Numbers section Component
class Numbers extends Component {
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
        {/*Section title & description*/}
        <NumbersTitleDescription
          title={numberStrings.title}
          description={numberStrings.description}
          link={numberStrings.href}
          linkName={numberStrings.linkName}
          updated={numberStrings.updated}/>
        <StyledGrid columns={3}>
          <StyledGridColumn mobile={16} computer={5}>
            {/* Number Card 1*/}
            <NumberCard
              number={numberStrings.firstCard.number}
              description={numberStrings.firstCard.description}
              approx={numberStrings.firstCard.approx}/>
          </StyledGridColumn>
          <StyledGridColumn mobile={16} computer={5}>
            {/* Number Card 2*/}
            <NumberCard
              number={numberStrings.secondCard.number}
              description={numberStrings.secondCard.description}
              approx={numberStrings.secondCard.approx}/>
          </StyledGridColumn>
          <StyledGridColumn mobile={16} computer={5}>
            {/* Number Card 3*/}
            <NumberCard
              number={numberStrings.thirdCard.number}
              description={numberStrings.thirdCard.description}
              approx={numberStrings.thirdCard.approx}/>
          </StyledGridColumn>
        </StyledGrid>
        {screenWidth <= 425
          ? <div>
            <a href={numberStrings.href} target='_blank' rel="noopener noreferrer"><StyledLink>{numberStrings.linkName}</StyledLink></a>
            <StyledUpdate>Updated: {numberStrings.updated}</StyledUpdate>
          </div>
          : <></>}
      </StyledSubSectionWrapper>
    )
  }
}

export default Numbers;