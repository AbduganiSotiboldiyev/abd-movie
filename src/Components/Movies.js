import Movie from './Movie'

export default function Movies(props) {
    const {movies = []} = props;
    return (
      <div className="movies" >
        {movies.length ?( movies.map(movie=> (
          <Movie key={movie.imdbID} {...movie}/>
        ))) : <h4 className='mt-4'>
          <div className="fw-bold"> 
            <h1 className='px-5'>Oops!</h1>
            <h2> Nothing found</h2>
          </div>
          </h4>}
      </div>
    )
}