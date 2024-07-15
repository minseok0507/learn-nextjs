"use client";

import Link from "next/link";
import styles from "../style/movie.module.css";
import {useRouter} from "next/navigation";

export default function Movie(getMovie) {
    const movie = getMovie.movie;
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${movie.id}`);
    }
    return (
        <div key={movie.id} className={styles.movie} onClick={onClick}>
            <img src={movie.poster_path} alt={movie.title}/>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
    );
}