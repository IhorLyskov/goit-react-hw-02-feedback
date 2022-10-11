import styled from 'styled-components';

export const NotificationStyle = styled.span`
  display: block;
  margin-top: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSize[3]};
  font-weight: ${p => p.theme.fontWeight.medium};
`;
