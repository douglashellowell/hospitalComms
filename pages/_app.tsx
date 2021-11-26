import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav';
import styled from 'styled-components';
import CommonAudio from '../components/CommonAudio';

const Layout = styled.div`
  padding: 3rem;
  max-width: 700px;
  margin: auto;
  background-color: grey;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CommonAudio />
    </div>
  );
}

export default MyApp;
