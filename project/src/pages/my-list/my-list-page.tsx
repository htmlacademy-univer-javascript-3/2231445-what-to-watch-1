import React, { FC } from 'react';
import { Film } from '../../types/film.type';
import FilmList from '../../components/film-list/film-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

type MyListProps = {
  films: Film[];
}

const MyListPage: FC<MyListProps> = (props) => {
  const { films } = props;
  return (
    <div className='user-page'>
      <Header/>
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <FilmList films={films}/>
      </section>
      <Footer/>
    </div>
  );
};

export default MyListPage;
