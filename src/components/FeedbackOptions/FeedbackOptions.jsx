import PropTypes from 'prop-types';
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
          {feedback === 'bad' && <Icon src={bad} />}
          {feedback === 'neutral' && <Icon src={neutral} />}
          {feedback === 'good' && <Icon src={good} />}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
