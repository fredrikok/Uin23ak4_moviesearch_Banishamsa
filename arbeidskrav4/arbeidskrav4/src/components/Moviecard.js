


export default function MovieCard({title, img, year, rating, genre, slug }){
    /*
    <p> vurdering <span>{rating}</span></p>
    <p> utgivelses år <span>{year}</span></p>
    <p> sjanger <span>{genre}</span></p>
    
            <img src={img} alt={title} />
            <Link to={slug} className="link"></Link>*/
    return(
        <article className="movie-card">
            <h3>{title}</h3>
        </article>
    )
}