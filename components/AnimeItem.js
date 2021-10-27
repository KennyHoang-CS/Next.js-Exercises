import Link from 'next/link'

export default function AnimeItem({ anime }) {
    return (
        <div>
            <Link href="/anime/[id]"
                as={`/anime/${anime.id}`}>
                    <a>
                        <h3>{anime.attributes.canonicalTitle}</h3>
                        <p>{anime.attributes.synopsis}</p>
                    </a>
            </Link>
        </div>
    )
}