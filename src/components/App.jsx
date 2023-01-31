import { useState } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = ({ target: { name } }) =>
    setFeedback(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });

  const clearForm = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  const countPercentage = fidbackName => {
    if (!total) return 0;
    return Math.round((feedback[fidbackName] * 100) / total);
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = countPercentage('good');
  const neutralPercentage = countPercentage('neutral');
  const badPercentage = countPercentage('bad');
  const feedbacks = Object.keys(feedback);
  
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