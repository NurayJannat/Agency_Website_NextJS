import Head from 'next/head'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Intro />
      
    </div>
  )
}
