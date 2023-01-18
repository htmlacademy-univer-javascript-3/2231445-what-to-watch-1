import React from 'react';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Film } from '../../types/film.type';
import { genres } from '../../constants/genres';

const DEFAULT_FILM_CARD_HREF = 'film-card.html';

export default function MainPage(props: Film): JSX.Element {
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.imageUrl} alt={props.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={'img/the-grand-budapest-hotel-poster.jpg'}
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
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

          <ul className="catalog__genres-list">
            {
              genres.map((item) => (
                <li className="catalog__genres-item catalog__genres-item--active" key={item}>
                  <a href="#" className="catalog__genres-link">{item}</a>
                </li>))
            }
          </ul>

          <div className="catalog__films-list">
            <FilmCard
              image={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
              name={'Fantastic Beasts: The Crimes of Grindelwald'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/bohemian-rhapsody.jpg'}
              name={'Bohemian Rhapsody'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/macbeth.jpg'}
              name={'Macbeth'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/aviator.jpg'}
              name={'Aviator'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/we-need-to-talk-about-kevin.jpg'}
              name={'We need to talk about Kevin'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/what-we-do-in-the-shadows.jpg'}
              name={'What We Do in the Shadows'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/revenant.jpg'}
              name={'Revenant'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/johnny-english.jpg'}
              name={'Johnny English'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/shutter-island.jpg'}
              name={'Shutter Island'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/pulp-fiction.jpg'}
              name={'Pulp Fiction'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/no-country-for-old-men.jpg'}
              name={'No Country for Old Men'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/snatch.jpg'}
              name={'Snatch'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/moonrise-kingdom.jpg'}
              name={'Moonrise Kingdom'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/seven-years-in-tibet.jpg'}
              name={'Seven Years in Tibet'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/midnight-special.jpg'}
              name={'Midnight Special'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/war-of-the-worlds.jpg'}
              name={'War of the Worlds'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/dardjeeling-limited.jpg'}
              name={'Dardjeeling Limited'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/orlando.jpg'}
              name={'Orlando'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/mindhunter.jpg'}
              name={'Mindhunter'}
              href={DEFAULT_FILM_CARD_HREF}
            />

            <FilmCard
              image={'img/midnight-special.jpg'}
              name={'Midnight Special'}
              href={DEFAULT_FILM_CARD_HREF}
            />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}
