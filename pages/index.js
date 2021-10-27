import Head from 'next/head'
import axios from 'axios'
import AnimeList from '../components/AnimeList'

export default function Home({ animes }) {
  
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta 
          name='keywords'
          content='web development, programming'
        />
      </Head>
      <h1>Welcome to Next</h1>
      <AnimeList animes={animes.data}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=3`);
  
  return {
    props: {
      animes: res.data
    },
  }
}
