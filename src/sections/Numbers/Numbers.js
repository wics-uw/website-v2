import React, {Component} from 'react';
import NumbersTitleDescription from "../../components/NumbersTitleDescription/NumbersTitleDescription";
import numberStrings from "../../res/strings/numberStrings";
import NumberCard from "../../components/NumberCard/NumberCard";
import {StyledSubSectionWrapper} from "../../res/globalStyles";
import {StyledGrid, StyledGridColumn} from "./styles";

// Numbers section Component
class Numbers extends Component {
  render() {
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
      </StyledSubSectionWrapper>
    )
  }
}

export default Numbers;