import styled from '@src/styled';
import { Button as RawButton } from 'rebass';

const Button = styled(RawButton)`
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  &:hover[disabled],
  &:focus[disabled],
  &:active[disabled] {
    color: ${props => props.theme.colors.highlight};
    border-color: ${props => props.theme.colors.highlight};
  }
`;

export default Button;
