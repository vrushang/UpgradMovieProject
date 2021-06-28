import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import Header from '../common/header/Header';
export default function Controller(props) {


    const [releasedMovie, setReleasedMovie] = useState([
        {
            id: 1,
            title: 'Parasite',
            language: 'English',
            released: 'yes',
            releasedDate: '04-08-2020',
            duration: '140 minutes',
            imdb: '9.4',
            category: 'Movies',
            genre: ['drama', 'thriller'],
            poster_url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/parasite-the-kim-family-woo-sik-choi-kang-ho-song-hye-jin-jang-so-dam-park-in-parasite-rgb-1580414364.jpg?crop=1.00xw:0.753xh;0,0.117xh&resize=980:*',
            plot:'An unemployed family of four slips into the lives of the crazy wealthy Park family. Then, theres an incident that can’t entirely be cleaned up in a cleaning shift. Long after the credits roll, you all be questioning the ending and mulling over the tough, important themes.',
            trailer: 'https://youtu.be/SEUXfv87Wpk',
            trailerId: 'UhU57OgGp50',
            artists: [
                {
                    id: 1,
                    "artistName": 'Cho Yeo-jeong',
                    "artistImage": 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQss-hqo-p0L8nPtSRMt1ajHbY6_oG009FG7ywdy6h7kBdG8yyO'
                },
                {
                    id: 2,
                    "artistName": 'Woo-sik Choi',
                    "artistImage": 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVMdDUyUB23OIKoPzdZAvRRQmeVt0KUKpWMESs9Xd1sePLr8vP'
                }
            ]
        },
        {
            id: 2,
            title: 'Shakuntala Devi',
            language: 'Hindi',
            released: 'no',
            releasedDate: '',
            imdb: '6.1',
            category: 'Movies',
            genre: ['drama', 'comedy'],
            poster_url: 'https://pyxis.nymag.com/v1/imgs/746/81f/110d5933298623461c500dd3d29e0c2026-shakuntala-devi.rvertical.w1200.jpg',
        },
        {
            id: 3,
            title: 'Dilwale Dulhania Le Jayenge',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '03-08-1995',
            duration: '150 minutes',
            imdb: '8.6',
            category: 'Movies',
            genre: ['drama', 'comedy'],
            poster_url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-52800409-1607533836.jpg?crop=1xw:1xh;center,top&resize=980:*",
            plot:"The longest-running Hindi film of all time (going on 25 years now!) is an absolute delight. The Bollywood rom-com about two young star-crossed lovers who fall in love despite their parents' critiques ended up winning 10 Filmfare Awards—India’s Academy Award equivalent —and changed the game forever.",
            trailer: 'https://youtu.be/cmax1C1p660',
            trailerId: 'IUCeN7kelXs',
            artists: [
                {
                    id: 1,
                    "artistName": 'Shah Rukh Khan',
                    "artistImage": 'data:image/jpeg;base64,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'
                },
                {
                    id: 2,
                    "artistName": 'Kajol',
                    "artistImage":"data:image/jpeg;base64,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"
                                }
            ]
        },
        {
            id: 4,
            title: 'The Dark Knight',
            language: 'English',
            released: 'yes',
            releasedDate: '08-03-2008',
            duration: '130 minutes',
            imdb: '8.3',
            category: 'Movie',
            genre: ['thriller', 'suspense'],
            poster_url:"https://hips.hearstapps.com/mac.h-cdn.co/assets/15/34/mcx-actors-preparing-for-roles-heath-ledger-the-dark-knight.jpg?crop=1xw:1xh;center,top&resize=980:*",
            plot:"This second movie in the Batman trilogy is arguably the best of the bunch. Heath Ledger sets the standard what it takes to play the Joker, as he won an Oscar for his performance. Some say it's the best superhero film ever made and we have to agree.",
            trailer: 'https://www.youtube.com/watch?v=u0UkDQaR5KQ',
            trailerId: 'u0UkDQaR5KQ',
            artists: [
                {
                    id: 1,
                    "artistName": 'Christian Bale',
                    "artistImage": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRx0Q_46PH6f1xry-y5Xhmi9L1GnePGF1geg9tgZc3eiCZM6e8B'
                },
                {
                    id: 2,
                    "artistName": 'Aaron Eckhart',
                    "artistImage": 'data:image/jpeg;base64,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',
                },
                {
                    id: 3,
                    "artistName": 'Maggie Gyllenhaal',
                    "artistImage": 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2uS1wHxULXRm1SSHG3IyVK8oyxZl6HHDcgGbpdHGVX06z19nS'
                },
                {
                    id: 4,
                    "artistName": 'Heath Ledger',
                    "artistImage": 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Heath_Ledger_%282%29.jpg'
                }
            ]
        },
        {
            id: 5,
            title: 'Mumbai Saga',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '19-03-2021',
            imdb: '6.2',
            category: 'Movies',
            genre: ['thriller', 'suspense'],
            poster_url: 'https://stat2.bollywoodhungama.in/wp-content/uploads/2021/03/Mumbai-Saga-9.jpg',
            plot: 'MUMBAI SAGA is the story of a gangster (Amartya Rao) and his rivalry with a cop. Amartya Rao goes from living a simple life to that of a feared gangster in Mumbai during the \'90s.',
            trailer: 'https://www.youtube.com/watch?v=YTGO38DSIsc',
            trailerId: 'YTGO38DSIsc',
            artists: [
                {
                    id: 1,
                    "artistName": 'John Abraham',
                    "artistImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrXME-icP3YtyNcMjGw4X0HQjMNLwTUlDobyG5MoB1q5kHHe5'
                },
                {
                    id: 2,
                    "artistName": 'Kajal Aggarwal',
                    "artistImage": 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Kajal_Aggarwal_on_the_sets_of_Queen_Kannada_remake.jpg',
                },
                {
                    id: 3,
                    "artistName": 'Sunil Shetty',
                    "artistImage": 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/suniel-shetty-2291-09-09-2019-01-21-33.jpg?1'
                },
                {
                    id: 4,
                    "artistName": 'Emraan Hashmi',
                    "artistImage": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR59uA62aCjOoUP0yzsx6K6ItlKtqW15lGCJqhk-vdB9aEHw6G4'
                }
            ]
        },
        {
            id: 6,
            title: 'Harry Potter 1',
            language: 'English',
            released: 'yes',
            releasedDate: '12-04-2002',
            duration: '128 minutes',
            imdb: '7.6',
            category: 'Kids',
            genre: ['drama', 'horror', 'suspense'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
            plot: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry\'s first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his education.',
            trailer: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
            trailerId: 'VyHV0BRtdxo',
            artists: [
                {
                    id: 1,
                    "artistName": 'Daniel Radcliffe',
                    "artistImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLQjqRAL2Gj8NGIt_bhmjaV3OfM73zIwC6JgTxGL6xBQqudDf'
                },
                {
                    id: 2,
                    "artistName": 'Emma Watson',
                    "artistImage": 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdR8EBtqfxKIj8-vazEROe6JEkpca-oJMaesCzmF3tni5KbwaW',
                },
                {
                    id: 3,
                    "artistName": 'Rupert Grint',
                    "artistImage": 'https://www.biography.com/.image/t_share/MTgxMDExNTAwNTc0NTE2NTg0/gettyimages-1042108258.jpg'
                },
                {
                    id: 4,
                    "artistName": 'Bonnie Wright',
                    "artistImage": 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTY8w3fYrItdVZTDnjcVvjei8s896Aqceb5TKkvyviNgxL9ddBT'
                }
            ]
        },
        {
            id: 7,
            title: 'The Conjuring',
            language: 'English',
            released: 'yes',
            releasedDate: '02-08-2013',
            imdb: '7.5',
            category: 'Movies',
            genre: ['horror', 'suspense'],
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg',
            plot: 'The Conjuring is a 2013 American supernatural horror film directed by James Wan.',
            trailer: 'https://www.youtube.com/watch?v=k10ETZ41q5o',
            trailerId: 'k10ETZ41q5o',
            artists: [
                {
                    id: 1,
                    "artistName": 'Patrick Wilson',
                    "artistImage": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuvmLbWaZ-xW8yh-x0U7LwzvfqgwfZt22zFaIezT7g0dbzFYBh'
                },
                {
                    id: 2,
                    "artistName": 'Vera Farmiga',
                    "artistImage": 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDcwaGtfKmtIrkeIQRheUgEtwVLUQF6dIcxIvzH3TYrCpTHIdX',
                },
            ]
        },
        {
            id: 8,
            title: 'Sonu Ke Titu Ki Sweety',
            language: 'Hindi',
            imdb: '7.1',
            release: 'yes',
            releasedDate: '23-02-2018',
            category: 'Movies',
            genre: ['comedy', 'drama'],
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/7/77/Sonu_Ke_Titu_Ki_Sweety_-_Movie_Poster.jpg',
        },
        {
            id: 9,
            title: 'Hanuman Immortal 2',
            language: 'Hindi',
            imdb: '4.4',
            category: 'Kids',
            genre: ['comedy', 'Action and adventure'],
            poster_url: 'https://images-na.ssl-images-amazon.com/images/I/812aG9gmUnL._SL1500_.jpg',
        },
    ])
    const upcomingMovie = [
        {
            id: 1,
            title: 'Inception',
            language: 'English',
            released: 'yes',
            releasedDate: '16-07-2010',
            imdb: '8.8',
            category: 'Movies',
            genre: ['science fiction', 'thriller', 'action', 'adventure'],
            poster_url: 'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg',
        },
        {
            id: 2,
            title: 'The Dark Knight',
            language: 'English',
            released: 'yes',
            releasedDate: '18-07-2008',
            imdb: '9',
            category: 'Movies',
            genre: ['action', 'adventure', 'super-hero'],
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
        },
        {
            id: 3,
            title: 'Avengers: Endgame',
            language: 'English',
            released: 'yes',
            releasedDate: '26-04-2016',
            imdb: '8.4',
            category: 'Movies',
            genre: ['action', 'super-hero', 'science fiction'],
            poster_url: 'https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SL1371_.jpg',
        },
        {
            id: 4,
            title: 'Iron Man',
            language: 'English',
            released: 'yes',
            releasedDate: '01-05-2008',
            imdb: '7.9',
            category: 'Movies',
            genre: ['action', 'super-hero', 'science fiction'],
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
        },
        {
            id: 5,
            title: 'Extraction',
            language: 'Hindi',
            released: 'yes',
            releasedDate: '24-04-2020',
            imdb: '6.7',
            category: 'Movies',
            genre: ['thriller', 'suspense'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
        {
            id: 6,
            title: 'Harry Potter 1',
            language: 'English',
            released: 'yes',
            releasedDate: '02-06-2021',
            imdb: '7.6',
            category: 'Kids',
            genre: ['drama', 'horror', 'suspense'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
        },
        {
            id: 7,
            title: 'The Conjuring',
            language: 'English',
            released: 'yes',
            releasedDate: '05-06-2021',
            imdb: '7.5',
            category: 'Movies',
            genre: ['horror', 'suspense'],
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg',
        },
        {
            id: 8,
            title: 'Tenet',
            language: 'English',
            imdb: '7.4',
            released: 'yes',
            releasedDate: '04-12-2020',
            category: 'Movies',
            genre: ['spy', 'drama', 'epic'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
        },
    ]


    return (
        <Fragment>
            <Header />
            <Router>
                <div className='main-container'>
                    <Route exact path='/' render={(props) => <Home  {...props} releasedMovie={releasedMovie} setReleasedMovie={setReleasedMovie} upcomingMovie={upcomingMovie} />} />
                    <Route exact path='/detail/:id' render={(props) => <Details {...props} />} />
                </div>
            </Router>
        </Fragment>
    )
}
