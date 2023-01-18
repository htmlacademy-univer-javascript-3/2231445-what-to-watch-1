import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FilmShort } from '../../types/film.short.type';

export type FilmCardProps = {
  film: FilmShort;
}

const FilmCard: FC<FilmCardProps> = (props) => {
  const { film } = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.imageUrl} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
};

export default FilmCard;
