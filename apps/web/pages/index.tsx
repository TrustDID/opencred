import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/globals.module.css';

const Home: NextPage = () => (
  <>
    <Head>
      <title>OpenCred</title>
      <meta name="description" content="Decentralized Credential Passport on Stellar" />
    </Head>
    <main className={styles.main}>
      <h1>OpenCred</h1>
      <p>Monorepo scaffolding for the OpenCred decentralized credential passport.</p>
      <p>Backend, frontend, smart contracts, and Stellar utilities are structured for contributors.</p>
    </main>
  </>
);

export default Home;
