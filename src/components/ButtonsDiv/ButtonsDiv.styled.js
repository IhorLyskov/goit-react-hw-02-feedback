import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${p => p.theme.space[0]}px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
