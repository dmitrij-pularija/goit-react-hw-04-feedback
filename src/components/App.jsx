import { useState } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const feedbacks = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const clearForm = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPercentageGood = () => {
    if (!good) return 0;
    return Math.round((good * 100) / total);
  };

  const countPercentageNeutral = () => {
    if (!neutral) return 0;
    return Math.round((neutral * 100) / total);
  };

  const countPercentageBad = () => {
    if (!bad) return 0;
    return Math.round((bad * 100) / total);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPercentageGood();
  const neutralPercentage = countPercentageNeutral();
  const badPercentage = countPercentageBad();

  return (
    <Container onClear={clearForm}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions feedbacks={feedbacks} handleClick={handleClick} />
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
};

export default App;