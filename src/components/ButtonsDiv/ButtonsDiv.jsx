import PropTypes from 'prop-types';
import { Container } from './ButtonsDiv.styled';
import ButtonAction from './ButtonAction';

const ButtonsDiv = ({ actions, onClick }) => (
  <Container>
    {actions.map(action => (
      <ButtonAction
        key={action}
        action={action}
        onClick={() => onClick(action)}
      />
    ))}
  </Container>
);

ButtonsDiv.propTypes = {
  actions: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonsDiv;
