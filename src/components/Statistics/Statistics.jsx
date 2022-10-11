import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';
import capitalize from 'lodash.capitalize';

function Statistics({ parms }) {
  const keys = Object.keys(parms);
  return (
    <StatList>
      {keys.map(key => {
        return (
          <StatItem key={key}>
            {capitalize(key)}: {parms[key]}
          </StatItem>
        );
      })}
    </StatList>
  );
}

Statistics.propTypes = {
  parms: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    'Positive feedback': PropTypes.string.isRequired,
  }).isRequired,
};

export default Statistics;
