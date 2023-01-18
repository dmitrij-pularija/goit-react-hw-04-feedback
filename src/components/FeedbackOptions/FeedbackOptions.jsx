import propTypes from 'prop-types';
import { Button, Box, Icon } from './FeedbackOptions.styled';
import good from '../../img/good.svg';
import neutral from '../../img/neutral.svg';
import bad from '../../img/bad.svg';

const FeedbackOptions = ({ feedbacks, handleClick }) => {
  return (
    <Box>
      {feedbacks.map(feedback => (
        <Button
          type="button"
          onClick={handleClick}
          name={feedback}
          key={feedback}
        >
          {feedback === 'good' && <Icon src={good} />}
          {feedback === 'neutral' && <Icon src={neutral} />}
          {feedback === 'bad' && <Icon src={bad} />}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  feedbacks: propTypes.arrayOf(propTypes.string).isRequired,
  handleClick: propTypes.func.isRequired,
};

export default FeedbackOptions;
