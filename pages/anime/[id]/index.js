import { useRouter } from 'next/router'
import axios from 'axios'

export default function anime({ anime }) {
    
    //const router = useRouter(); 
    //const { id } = router.query;
    //console.log(`anime: ${anime}`)
    return (
        <div>
            This is anime {anime.id}
        </div>
    )
}

export const getServerSideProps = async (context) => {
    
    let id = context.params.id; 
    const res = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
    let anime = res.data.data; 

    //console.log(`WHAT IS ID: ${JSON.stringify(anime.data)}`)

    return {
        props: {
            anime
        }
    }
}