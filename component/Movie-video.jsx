const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function MovieVideo({id : id}) {
    const videos = await getVideoId(id);
    return (

        <div>
            {JSON.stringify(videos)}
        </div>
    );
}

async function getVideoId(id) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}