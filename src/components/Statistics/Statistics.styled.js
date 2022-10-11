import styled from 'styled-components';

export const StatList = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSize[3]};
  font-weight: ${p => p.theme.fontWeight.medium};
`;

export const StatItem = styled.li`
  margin-top: ${p => p.theme.space[3]}px; ;
`;
