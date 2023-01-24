import { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const key = event.target.name;
    this.setState(prevFfeedback => {
      return { [key]: (prevFfeedback[key] += 1) };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPercentage = vol => {
    if (!vol) return 0;
    return Math.round((vol * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbacks = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPercentage(good);
    const neutralPercentage = this.countPercentage(neutral);
    const badPercentage = this.countPercentage(bad);

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            feedbacks={feedbacks}
            handleClick={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              positivePercentage={positivePercentage}
              neutralPercentage={neutralPercentage}
              badPercentage={badPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;