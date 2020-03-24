import Head from "next/head";
import { NextPage } from "next";
import routes from "@src/routes";
import Button from "@components/elements/Button";
import styled from "styled-components";
import EmptyLayout from "@layouts/Empty";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding: 15px;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin-left: 0.5rem;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    & {
      width: 100%;
      flex-direction: column;
    }
  }
`;

const Title = styled.h1`
  & a {
    color: #0070f3;
    text-decoration: none;
  }

  & a:hover,
  & a:focus,
  & a:active {
    text-decoration: underline;
  }

  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
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

const Home: NextPage = () => (
  <EmptyLayout>
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        <a href={routes.auth.login} title="Login">
          <Button>Login</Button>
        </a>
      </Nav>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing <code>pages/index.js</code>
        </Description>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/zeit/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with ZEIT Now.
            </p>
          </Card>
        </Grid>
      </Main>

      <Footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </Footer>
    </Container>
  </EmptyLayout>
);

export default Home;
