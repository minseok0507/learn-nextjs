import Link from "next/link";
import { resolve } from "path";

export const metadata = {
    title: "Home",
}


const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie(){
    await new Promise((resolve) => setTimeout(resolve, 300));
    const respone = await fetch(API_URL);
    const json = await respone.json();
    return json;
}

export default async function Page() {
    const movies = await getMovie();
    return (
        <div>
            {movies.map(movie => <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>)}
        </div>
    )
}