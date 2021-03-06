import styled from '@src/styled';

const Card = styled.div`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  transition: border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export default Card;
