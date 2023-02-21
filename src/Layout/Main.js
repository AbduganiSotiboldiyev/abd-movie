import Movies from "../Components/Movies";
import Loader from "../Components/Loader";
import Search from "../Components/Search";
import React from "react";
export default class Main extends React.Component {
    state = {
        movies : [],
        loading: true
    };

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=8b648976&s=panda')
        .then(response => response.json())
        .then(data => this.setState({ movies: data.Search,loading: false }))
        

        
    }

    searchMovie = (url,type ="all") =>{
      this.setState({ loading: true})
      fetch(`http://www.omdbapi.com/?apikey=8b648976&s=${url}${type !== 'all'?`&type=${type}`:''} `)
        .then(response => response.json())
        .then(data => this.setState({ movies: data.Search, loading:false}))
    }
  render() {
   
      return(
        <div className="main container">
          <Search  searchMovie = {this.searchMovie}/>
           {this.state.loading ?   <h1><Loader /></h1> : ( <Movies movies={this.state.movies}/>)}
           
        </div>
    )
  }
  
}