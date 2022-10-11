import React from 'react';
import Section from './Section/Section';
import ButtonsDiv from './ButtonsDiv/ButtonsDiv';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementActionState = action => {
    this.setState(prevState => {
      return { [action]: prevState[action] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(total) {
    return Math.round((this.state.good * 100) / total);
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const statistics = total ? (
      <Statistics
        parms={{
          ...this.state,
          total: total,
          'Positive feedback': positivePercentage.toString() + '%',
        }}
      />
    ) : (
      <Notification message="There is no feedback"></Notification>
    );
    return (
      <>
        <GlobalStyle />
        <Section title="Please live feedback">
          <ButtonsDiv
            actions={Object.keys(this.state)}
            onClick={this.incrementActionState}
          />
        </Section>
        <Section title="Statistics">{statistics}</Section>
      </>
    );
  }
}
