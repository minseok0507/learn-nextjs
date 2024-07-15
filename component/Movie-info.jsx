const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
import MovieCard from "../style/movie-info.module.css";

export default async function MovieInfo({id: id}) {
    const movie = await getMovieId(id);
    return (
        <div className={MovieCard.container}>
            <img src={movie.poster_path} alt={movie.title} className={MovieCard.poster}/>
            <div>
                <h1 className={MovieCard.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1) }</h3>
                <p className={MovieCard.info}>{movie.overview}</p><br/>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    );
}

export async function getMovieId(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
}
