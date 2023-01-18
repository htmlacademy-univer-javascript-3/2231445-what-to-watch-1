import Footer from '../../components/footer/footer';
import { Film } from '../../types/film.type';
import FilmList from '../../components/film-list/film-list';
import { useAppSelector } from '../../hooks/hooks';
import { ALL_GENRES } from '../../constants/all-genres';
import { SHOWN_FILMS_STEP } from '../../constants/routes';
import { useState } from 'react';
import ShowMore from '../../components/show-more/show-more';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';



type MainPageProps = {
  film: Film;
}
function MainPage({film}: MainPageProps) : JSX.Element {
  const { films, activeGenre } = useAppSelector((state) => state);
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(SHOWN_FILMS_STEP);
  const genres = [ALL_GENRES].concat([...new Set(films.map((f) => f.genre))]);
  const filteredFilms = films
    .filter((f) => f.genre === activeGenre || activeGenre === ALL_GENRES)
    .slice(0, visibleFilmsCount);

  const showMoreClick = () => {
    setVisibleFilmsCount(visibleFilmsCount + SHOWN_FILMS_STEP);
  };
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genres={genres} activeGenre={activeGenre}/>
          <FilmList films={filteredFilms}/>
          {filteredFilms.length % SHOWN_FILMS_STEP === 0 && <ShowMore onClick={showMoreClick}/>}
        </section>
        <Footer/>
      </div>
    </>
  );
}
export default MainPage;
