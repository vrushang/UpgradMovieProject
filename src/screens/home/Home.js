import React, { Fragment } from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/styles';
import { GridList, GridListTile, GridListTileBar, TextField, Button } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { FormControl, Input, InputLabel, Select, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
         background:"#b9b9b9"
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: "#4791db",
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    formControl: {
        minWidth: 240,
        maxWidth: 240,
        marginTop: 16
    }
}));

const Home = (props) => {
    const { releasedMovie, setReleasedMovie, upcomingMovie } = props;



    const onHandleSubmit = (e) => {
        e.preventDefault();
        let filteredItems = releasedMovie.filter((item) => {
            // console.log(item.genre);
            // console.log(select.genres);
            return item.title.toLocaleLowerCase().includes(select.movieName.toLocaleLowerCase()) || item.genre.includes(select.genres.toLocaleLowerCase());
        })
        setReleasedMovie(filteredItems);
    }


    // state which contain data for card for for litering movie
    const [select, setSelect] = React.useState({
        movieName: "",
        genres: "",
        artist: "",
        startDate: "",
        endDate: '',
    });

    return (
        <Fragment>
            <div className="heading">
                <p>Upcoming Movies</p>
            </div>
            <UpCommingMovies upcomingMovie={upcomingMovie} />

            <div>
                <div className="row1">
                    <div className="col1">
                        <ReleaseMovies releasedMovie={releasedMovie} />
                    </div>
                    <div className="col2">
                        <FilterForm select={select} setSelect={setSelect} onHandleSubmit={onHandleSubmit} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

// upcomming movie component which display upcomming movies

const UpCommingMovies = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={6}>
                {props.upcomingMovie.map((tile) => (
                    <GridListTile key={tile.poster_url}>
                        <img height="250" src={tile.poster_url} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}

                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

//released movie component :filtering movie with only movie name

const ReleaseMovies = (props) => {
    const classes = useStyles();

    const filteredData = props.releasedMovie.filter((item) => item.released === 'yes');
    return (
        <div>
            <GridList cellHeight={350} cols={3} style={{ marginRight: 40 }}>
                {filteredData.map((tile) => (
                    <GridListTile key={tile.poster_url}>
                        <Link to={{ pathname: `/detail/:${tile.id} `, state: { movieData: tile } }}>
                            <img className="img" style={{ height: 350 }} src={tile.poster_url} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={`ReleasedDate : ${tile.releasedDate}`}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                            />
                        </Link>

                    </GridListTile>
                ))}

            </GridList>
        </div>
    )
}

// FilterForm component which contain card with form for filtering moviedata
const FilterForm = (props) => {
    const { select, setSelect, onHandleSubmit } = props;
    const classes = useStyles();

    const [genres, setGenres] = React.useState({
        drama: false,
        romance: false,
        horror: false,
        thriller: false,
        crime: false
    });


    const [artist, setArtist] = React.useState({
 

        ChristianBale: false,
        JohnAbraham: false,
        EmmaWatson: false,
        PatrickWilson: false
    });
    const onInputCheckBoxGenresChange = (event) => {
        const Cate = select;
        setGenres({ ...genres, [event.target.name]: event.target.checked });
        Cate["genres"] = event.target.name;

        setSelect({ ...Cate })
    }
    const onInputCheckBoxArtistChange = (event) => {
        const Cate = select;
        setArtist({ ...artist, [event.target.name]: event.target.checked });
        Cate["artist"] = event.target.name;
        setSelect({ ...Cate })
    }
    const onInputChange = (event) => {
        const Cate = select;
        Cate[event.target.name] = event.target.value;
        setSelect({ ...Cate });
    };
    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    FIND MOVIES BY
                </Typography>
                <form onSubmit={onHandleSubmit}>
                    <FormControl>
                        <FormControl xs={12} className={classes.formControl}>
                            <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
                            <Input onChange={onInputChange} id="movieName" name="movieName" value={select.movieName} />
                        </FormControl>

                        <FormControl xs={12} className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Genres</InputLabel>
                            <Select

                                // labelId="demo-simple-select-label"
                                id="genres"
                                name="genres"
                                value={select.genres}
                                onChange={onInputChange}
                            >
                                <FormControl>
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.drama} onChange={onInputCheckBoxGenresChange} name="drama" />}
                                        label="Drama"
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={genres.romance} onChange={onInputCheckBoxGenresChange} name="romance" />}
                                        label="Romance"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.horror} onChange={onInputCheckBoxGenresChange} name="horror" />}
                                        label="Horror"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.thriller} onChange={onInputCheckBoxGenresChange} name="thriller" />}
                                        label="Thriller"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={genres.crimeś} onChange={onInputCheckBoxGenresChange} name="crime" />}
                                        label="Crime"
                                    />
                                </FormControl>
                            </Select>
                        </FormControl>


                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Artist</InputLabel>
                            <Select

                                // labelId="demo-simple-select-label"
                                id="artist"
                                name="artist"
                                value={select.artist}
                                onChange={onInputChange}
                            >
                                <FormControl>
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.manishaKoirala} onChange={onInputCheckBoxArtistChange} name="manishaKoirala" />}
                                        label="Manisha Koirala"
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={artist.rajkumarHirani} onChange={onInputCheckBoxArtistChange} name="rajkumarHirani" />}
                                        label="Rajkumar Hirani"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.marlonBrando} onChange={onInputCheckBoxArtistChange} name="marlonBrando" />}
                                        label="Marlon Brando"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.leonardoDiCaprio} onChange={onInputCheckBoxArtistChange} name="leonardoDiCaprio" />}
                                        label="Leonardo DiCaprio"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={artist.josephGordonLevitt} onChange={onInputCheckBoxArtistChange} name="josephGordonLevitt" />}
                                        label="Joseph Gordon-Levitt"
                                    />
                                </FormControl>
                            </Select>
                        </FormControl>
                        <FormControl style={{ marginTop: 16 }} className={classes.formControl}>
                            <TextField
                                id="releaseDate"
                                label="Release Date Start"
                                type="date"
                                name="startDate"
                                onChange={onInputChange}
                                defaultValue="dd-mm-yyyy"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                        <FormControl style={{ marginTop: 16 }} className={classes.formControl}>
                            <TextField
                                id="date"
                                label="Release Date End"
                                type="date"
                                name="endDate"
                                onChange={onInputChange}
                                defaultValue="dd-mm-yyyy"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                        <FormControl >
                            <Button style={{ marginTop: 16 }} variant="contained" color="primary" type="submit">
                                APPLY
                            </Button>
                        </FormControl>
                    </FormControl>
                </form>

            </CardContent>
        </Card>
    )
}

export default Home;











