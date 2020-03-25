import styled from "styled-components";

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

  & h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export default Card;
