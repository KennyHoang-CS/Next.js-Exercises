import AnimeItem from "./AnimeItem";


export default function AnimeList({ animes }) {
    return (
        <div>
            {animes.map((anime) => (
                <AnimeItem anime={anime}/>
            ))}
        </div>
    )
}