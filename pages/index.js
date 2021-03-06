import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}
