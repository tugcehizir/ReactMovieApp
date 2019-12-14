import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
const MovieList = ({ loadingP, moviesP, request }) => {
    console.log(request)
    //react-router history hook fonksiyon
    const history = useHistory();
    const _onClick = id => {
        console.log('test:', id);
        history.push({pathname: '/detay', state: {movieId: id}}); //Bu fonksiyona verilen path'e yönlendirir.
    }
    if (loadingP === true) {
        return (
            <div>
                <p>Loading</p>
            </div>
        );

    }
    return (
        <div>
            {moviesP.map(item => (
                <div key={item.imdbID} onClick={() => _onClick(item.imdbID)}>
                    <img src={item.Poster} alt="description" />
                    <h5>{item.Title}</h5>
                    <p>{item.Year}</p>
                </div>
            ))}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        allProps: state.app.loading,
        moviesP: state.app.movies
    };
}


export default withRouter(connect(mapStateToProps)(MovieList));