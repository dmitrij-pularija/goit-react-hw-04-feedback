import PropTypes from 'prop-types';
import { Table, Header, Row, Feedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Table>
        <thead>
          <Header>
            <th>Bad</th>
            <th>Neutral</th>
            <th>Good</th>
            <th>Total</th>
          </Header>
        </thead>
        <tbody>
          <Row>
            <td>{bad}</td>
            <td>{neutral}</td>
            <td>{good}</td>
            <td>{total}</td>
          </Row>
        </tbody>
      </Table>
      <Feedback>Positive feedback {positivePercentage}%</Feedback>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
