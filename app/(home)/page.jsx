import style from "../../style/home.module.css";
import Movie from "../../component/Movie";

export const metadata = {
    title: "Home",
}

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function Page() {
    const movies = await getMovie();
    return (
        <div className={style.container}>
            {movies.map(movie =>
                <Movie key={movie.id} movie={movie}/>
            )}
        </div>
    )
}

async function getMovie() {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const respone = await fetch(API_URL);
    return await respone.json();
}
