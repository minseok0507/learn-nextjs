const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
import styles from "../style/movie-videos.module.css";

export default async function MovieVideo({id: id}) {
    const videos = await getVideoId(id);
    return (
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe key={video.id}
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            ))}
        </div>
    );
}

async function getVideoId(id) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}