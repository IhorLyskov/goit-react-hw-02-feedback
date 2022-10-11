import PropTypes from 'prop-types';
import { ButtonStyle } from './ButtonAction.styled';
import capitalize from 'lodash.capitalize';

const ButtonAction = ({ action, onClick }) => {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      {capitalize(action)}
    </ButtonStyle>
  );
};

ButtonAction.propTypes = {
  action: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonAction;
