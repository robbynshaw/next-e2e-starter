import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 10px;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid #eaeaea;
  border-radius: 10px;
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
    color: ${props => props.theme.colors.border};
    border-color: ${props => props.theme.colors.border};
  }
`;

export default Button;
