import PropTypes from 'prop-types';
import { NotificationStyle } from './Notification.styled';

const Notification = ({ message }) => (
  <NotificationStyle>{message}</NotificationStyle>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
