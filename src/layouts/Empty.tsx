import styled from "styled-components";

const EmptyLayout = styled.div`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  & h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & label,
  & p {
    font-size: 1.25rem;
    line-height: 1.5;
  }

  & p {
    margin: 0 0 10px 0;
  }
`;

export default EmptyLayout;
