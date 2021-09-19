import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Product</h1>
        <ul>
          <li>test 1</li>
          <li>test 2</li>
          <li>test 3</li>
        </ul>
      </div>
    </Layout>
  );
}
