import MovieCard from './Moviecard';
import { Link } from 'react-router-dom';
import Search from './SearchResults';
import SearchPage from './SearchPage';
import Layout from './Layout';
export default function Main({movies, setSearch, getMovies,title, recipes}){
    /*
    {
        <article>
            <MovieCard title="From Russia With Love"/>
            <SearchPage/>
            
            <Layout/>
        </article>
      }*/
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        <h2> 10 James Bond filmer</h2>
        <ul>
            {
                recipes?.map(item => {
                    return <MovieCard title={item.Title} />})
            }
        </ul>
        
          
        </section>
      </>

      );
}