import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import req from '../utils/requests'

export default function Home(props) {

  console.log(props);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A personal starter project for NEXT.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results />

    </div>
  )
}

export async function getServerSideProps(context) {

  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      req[genre]?.url || req.fetchTrending.url
    }`
    ).then((res) => res.json());

    return {
      props: {
        results: request.results,
      }
    }
}