import React, {Component} from 'react';
import NumbersTitleDescription from "../../components/NumbersTitleDescription/NumbersTitleDescription";
import numberStrings from "../../res/numberStrings";
import {Grid, GridColumn} from "semantic-ui-react";
import NumberCard from "../../components/NumberCard/NumberCard";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

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
        {/*Number cards*/}
        <Grid columns={3}>
          <GridColumn>
            {/* Number Card 1*/}
            <NumberCard
              number={numberStrings.firstCard.number}
              description={numberStrings.firstCard.description}
              approx={numberStrings.firstCard.approx}/>
          </GridColumn>
          <GridColumn>
            {/* Number Card 2*/}
            <NumberCard
              number={numberStrings.secondCard.number}
              description={numberStrings.secondCard.description}
              approx={numberStrings.secondCard.approx}/>
          </GridColumn>
          <GridColumn>
            {/* Number Card 3*/}
            <NumberCard
              number={numberStrings.thirdCard.number}
              description={numberStrings.thirdCard.description}
              approx={numberStrings.thirdCard.approx}/>
          </GridColumn>
        </Grid>
      </StyledSubSectionWrapper>

    )
  }
}

export default Numbers;