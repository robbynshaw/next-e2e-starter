import styled from '@src/styled';

const Code = styled.code`
  display: inline-block;
  font-family: ${props => props.theme.fonts.monospace};
  background: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.radii.default}px;
  padding: 0.75rem;
`;

export default Code;
