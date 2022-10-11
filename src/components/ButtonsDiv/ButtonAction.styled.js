import styled from 'styled-components';

export const ButtonStyle = styled.button`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.bold};

  border: ${p => p.theme.border.normal};
  border-color: ${p => p.theme.color.colorBorder};

  background-color: ${p => p.theme.color.colorComponentBg};

  border-radius: ${p => p.theme.radius.normal};

  :hover {
    border-color: ${p => p.theme.color.colorAccent};
    background-color: ${p => p.theme.color.colorAccent};
    color: ${p => p.theme.color.colorComponentBg};
  }
`;
