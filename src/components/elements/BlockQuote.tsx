import styled from "styled-components";

const BlockQuote = styled.blockquote`
  color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  margin-left: 30px;
  border-left: 5px solid ${props => props.theme.colors.border};
`;

export default BlockQuote;
