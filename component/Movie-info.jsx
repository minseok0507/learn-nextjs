const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function MovieInfo({id : id}) {
    const movie = await getMovieId(id);
    return (

        <div>
            {JSON.stringify(movie)}
        </div>
    );
}

async function getMovieId(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
}
