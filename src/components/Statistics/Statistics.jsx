import propTypes from 'prop-types';
import { Table, Header, Row, Feedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Table>
        <thead>
          <Header>
            <th>Good</th>
            <th>Neutral</th>
            <th>Bad</th>
            <th>Total</th>
          </Header>
        </thead>
        <tbody>
          <Row>
            <td>{good}</td>
            <td>{neutral}</td>
            <td>{bad}</td>
            <td>{total}</td>
          </Row>
        </tbody>
      </Table>
      <Feedback>Positive feedback {positivePercentage}%</Feedback>
      </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
