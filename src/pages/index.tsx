import { NextPage } from "next";
import styled from "styled-components";
import routes from "@src/routes";
import CenteredEmptyLayout from "@layouts/CenteredEmpty";
import Grid from "@elements/Grid";
import Code from "@elements/Code";
import ExternalLinkCard from "@elements/ExternalLinkCard";
import { H1 } from "@elements/Headers";
import LinkButton from "@src/components/elements/LinkButton";

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Nav = () => (
  <LinkButton href={routes.auth.login} title="Login" passHref>
    Login
  </LinkButton>
);

const Main = () => (
  <>
    <H1>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </H1>

    <Description>
      Get started by editing <Code>pages/index.js</Code>
    </Description>

    <Grid>
      <ExternalLinkCard href="https://nextjs.org/docs">
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </ExternalLinkCard>

      <ExternalLinkCard href="https://nextjs.org/learn">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </ExternalLinkCard>

      <ExternalLinkCard href="https://github.com/zeit/next.js/tree/master/examples">
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </ExternalLinkCard>

      <ExternalLinkCard href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
        <h3>Deploy &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with ZEIT Now.</p>
      </ExternalLinkCard>
    </Grid>
  </>
);

const Home: NextPage = () => <CenteredEmptyLayout nav={Nav} main={Main} />;

export default Home;
