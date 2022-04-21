import Head from 'next/head'
import styles from '../styles/Home.module.css'
import{ Header, Nav } from '../components/export'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A personal starter project for NEXT.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />


      {/* Results.section */}



    </div>
  )
}
