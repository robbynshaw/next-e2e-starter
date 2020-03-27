import React, { ComponentType } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import EmptyLayout from '@layouts/Empty';
import config from '@src/config';

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

export interface ICenteredEmptyLayoutProps {
  nav?: ComponentType;
  main: ComponentType;
  footer?: ComponentType;
}

const DefaultFooter = () => (
  <a
    href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
  </a>
);

const CenteredEmptyLayout = (props: ICenteredEmptyLayoutProps) => {
  const { nav: InnerNav, main: InnerMain, footer: InnerFooter } = props;

  return (
    <EmptyLayout>
      <Head>
        <title>{config.appName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>{InnerNav && <InnerNav />}</Nav>
      <Main>
        <InnerMain />
      </Main>
      <Footer>{InnerFooter ? <InnerFooter /> : <DefaultFooter />}</Footer>
    </EmptyLayout>
  );
};

export default CenteredEmptyLayout;
