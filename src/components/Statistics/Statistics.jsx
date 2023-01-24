import PropTypes from 'prop-types';
import {
  IndikatorGreen,
  IndikatorYellow,
  IndikatorRed,
  Vol,
  Feedback,
  GoodFeedback,
  NeutralFeedback,
  BadFeedback,
} from './Statistics.styled';
import ProgressBar from 'react-customizable-progressbar';

const Statistics = ({
  neutralPercentage,
  badPercentage,
  positivePercentage,
}) => {
  return (
    <>
      <IndikatorGreen>
        <ProgressBar
          radius={60}
          progress={positivePercentage}
          strokeWidth={10}
          strokeColor="#48AE2C"
          trackStrokeWidth={10}
          cut={120}
          rotate={-210}
          strokeLinecap="butt"
          trackStrokeLinecap="butt"
        />
        <IndikatorYellow>
          <ProgressBar
            radius={60}
            progress={neutralPercentage + badPercentage}
            strokeWidth={10}
            strokeColor="#FFD900"
            trackStrokeWidth={0}
            counterClockwise
            cut={120}
            rotate={-210}
            strokeLinecap="butt"
            trackStrokeLinecap="butt"
          />
        </IndikatorYellow>
        <IndikatorRed>
          <ProgressBar
            radius={60}
            progress={badPercentage}
            strokeWidth={10}
            strokeColor="#F32013"
            trackStrokeWidth={0}
            counterClockwise
            cut={120}
            rotate={-210}
            strokeLinecap="butt"
            trackStrokeLinecap="butt"
          />
        </IndikatorRed>
        <Vol>
          {positivePercentage > 33 ? (
            <GoodFeedback>Good</GoodFeedback>
          ) : neutralPercentage > 32 ? (
            <NeutralFeedback>Neutral</NeutralFeedback>
          ) : (
            badPercentage > 33 && <BadFeedback>Bad</BadFeedback>
          )}
          <p>{positivePercentage}%</p>
        </Vol>
      </IndikatorGreen>
      <Feedback>Positive feedback</Feedback>
    </>
  );
};

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  neutralPercentage: PropTypes.number.isRequired,
  badPercentage: PropTypes.number.isRequired,
};

export default Statistics;