import React from "react";

export default class Search extends React.Component {
    state = {
        search : "panda",
        type: "all"
    }
    
    searchHandler = (e) => {
        this.setState({search: e.target.value})
    }


   
    searchKeyDown = (e) => {
        if (e.key ==="Enter"){
            this.props.searchMovie(this.state.search,this.state.type)
        }
    };

        handleFilter = (e) => {
        this.setState(()=> ({type : e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex" role="search">
                    <input
                    className="form-control me-2" 
                    type="search" 
                    value={this.state.search}
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={this.searchHandler}
                    onKeyDown={this.searchKeyDown}
                    />
                    <button 
                    className="btn btn-outline-success" 
                    onClick={() => this.props.searchMovie(this.state.search,this.state.type)}
                    >
                        Search
                    </button>
                
                </div>
                <div className="d-flex" >
                <div class="form-check movie_ratio">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    value={this.state.type} 
                    data-type="all" 
                    name="type" 
                    id="flexRadioDefault1" 
                    onChange={this.handleFilter} 
                    checked={this.state.type ==='all'}
                    />
                    <label className="form-check-label" >
                        All
                    </label>
                </div>
                <div class="form-check movie_ratio">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    value={this.state.type} 
                    data-type="movie" 
                    name="type" 
                    id="flexRadioDefault1" 
                    onChange={this.handleFilter} 
                    checked={this.state.type ==="movie"}
                    />
                    <label className="form-check-label" >
                        Movies
                    </label>
                </div>
                <div class="form-check movie_ratio">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    value={this.state.type} 
                    data-type="series" 
                    name="type" 
                    id="flexRadioDefault1" 
                    onChange={this.handleFilter} 
                    checked={this.state.type ==="series"}
                    />
                    <label className="form-check-label" >
                        Series
                    </label>
                </div>
                </div>
                
            </div>
        )
    }
}