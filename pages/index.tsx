import Head from "next/head";
import styled from "@emotion/styled";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 5rem 0;
`;

const BlogTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  margin: 0;
`;

const TITLE: string = "Next.js + TypeScript";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <BlogTitle>{TITLE}</BlogTitle>
      </Main>
    </Container>
  );
}
