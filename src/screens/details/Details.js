import React from 'react';
import "./Details.css";
import { Button, Typography } from '@material-ui/core';
import ReactStars from "react-rating-stars-component";
// import GridList from 'material-ui/core/GridList';
import {GridList, GridListTileBar,GridListTile } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ReactYoutube from './ReactYoutube';

export default function Details(props) {

    const { movieData } = props.location.state;
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (


        <div>
            <Link to="/">
            <div className="backButton" >
                <Button >Back to Home</Button>
            </div >
            </Link>
            <div className="rowDetail1">
                <div className="colDetail1">
                    <img width="100%" height="250px" src={movieData.poster_url} alt={movieData['title']} />
                </div>
                <div className="colDetail2">
                    <Typography variant="headline" component='h2'>
                        {movieData.title}
                    </Typography>

                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>Genres:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}>{movieData.genre.map((item) => item + ',')} </Typography>

                    <br />
                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>Duration:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}>{movieData.duration} </Typography>

                    <br />
                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>Release Date:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}>{movieData.releasedDate}</Typography>
                    <br />

                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>Rating:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}>{movieData.imdb}</Typography>
                    <br />
                    <br />
                    <Typography variant="textPrimary" component='h5' style={{ display: 'inline-block' }}>plot:</Typography>
                    <Typography variant="textPrimary" component='p' style={{ display: 'inline-block' }}> {movieData.plot}</Typography>

                    <Typography variant="textPrimary" component='p'>
                        <h5>Trailer:</h5> {<ReactYoutube width="60%" trailerId={movieData.trailerId}/>}
                    </Typography>
                </div>
                <div className="colDetail3">
                    <Typography variant="headline" component='h2'>
                        Rate this movie:
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}     
                        />
                    </Typography>
                    <Typography variant="headline" component='h2'>
                        Artists:
                    </Typography>
                    <GridList cellHeight={250} cols={2} style={{ marginRight: 10, marginTop: 16, marginBottom: 16 }} >
                        {movieData.artists.map((artist) => (
                            <GridListTile key={artist.id}>

                                <img style={{ height: 250 }} src={artist.artistImage} alt={artist.artistImage} />
                                <GridListTileBar
                                    title={artist.artistName}
                                    className="detailTitle detailTitleBar"
                                
                                />
                            </GridListTile>
                        ))}

                    </GridList> 
                </div>
            </div>
        </div>
    )
}

