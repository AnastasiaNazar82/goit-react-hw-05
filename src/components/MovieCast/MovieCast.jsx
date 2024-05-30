import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getMoviesCast } from "./../../movie-api.js";
import Loader from "./../../components/Loader/Loader.jsx";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [listCast, setListCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function asyncWrapper() {
      try {
        setIsLoading(true);
        const dataCast = await getMoviesCast(movieId);
        setListCast(dataCast.cast);
      } catch (error) {
        return toast.error("This is an error! Please try again later!");
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      {isLoading && <Loader />}
      <ul className={css.castList}>
        {listCast &&
          listCast.length > 0 &&
          listCast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.listItem}>
              <div>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImg
                  }
                  width={150}
                  alt="poster"
                />
              </div>
              <h3 className={css.name}>{name}</h3>
              <p className={css.character}>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
