import Head from "next/head";
import styled from "@emotion/styled";
import { InferGetStaticPropsType } from "next";

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

const List = styled.ul`
  list-style: square;
`;

const ListItem = styled.li`
  color: #252525;
  cursor: pointer;
  margin: 40px 0;
  padding: 10px;
  text-transform: capitalize;
  &:hover {
    background: #f0f0f0;
  }
`;

const PostTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const TITLE: string = "Next.js + TypeScript";

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <BlogTitle>{TITLE}</BlogTitle>
    </Main>

    <List>
      {posts.map(({ id: POST_ID, title: POST_TITLE }) => (
        <ListItem key={POST_ID}>
          <PostTitle>{POST_TITLE}</PostTitle>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts
    }
  };
};
