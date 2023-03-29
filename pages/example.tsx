import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LinkButton from '../components/common/link-button/LinkButton';
import Link from 'next/link';

const Test = () => {
  return (
    <div>
      <Head>
        <title>Test Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LinkButton>test button</LinkButton>
      <LinkButton href="/">test link</LinkButton>
      <Link href="/">
        test anchor
      </Link>
    </div>
  );
};

export default Test;
