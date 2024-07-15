import {Suspense} from "react";
import MovieVideo from "../../../../component/Movie-video";
import MovieInfo from "../../../../component/Movie-info";


export default async function MovieDetail({
                                              params: { id },
                                          }) {


    return (
        <div>
            <Suspense fallback={<h1>Loading Video</h1>}>
                <MovieVideo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
        </div>
    );
}
