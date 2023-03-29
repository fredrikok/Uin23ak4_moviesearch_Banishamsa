import { useParams } from "react-router-dom"

export default function SearchPage({movies}){
    const {slug} = useParams()
    const movie = movies.find((rec) => rec?.movie?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(movie?.movie?.year)
    

    return (
        <section>
            <h1>{movie?.movie.label}</h1>
            <img src={movie?.movie?.image} alt={movie?.movie.label} />

            <ul>
                {movie?.movie?.movies.map((ing, index) => (
                    <li key={index}>{ing.text} vekt: {ing.weight}</li>
                ))}
            </ul>
        </section>
    )
}
