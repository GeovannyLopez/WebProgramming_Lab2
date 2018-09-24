import React from "react";
import SongApi from './SongApi';
import Stars from '../shared/Stars';
import { Link } from 'react-router-dom';

import Layout from '../layout/Layout';

function Details(props) {
    const song = SongApi.getSong(props.match.params.id);

    if (!song) {
        return <div>Sorry, but the song was not found</div>
    }

    return (
        <Layout userName={SongApi.getUser()}>
            <div>
                <h1 className="text-center">Details</h1>

                <div className="col-md-12">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <dl>
                                    <dt>Song</dt>
                                    <dd>{song.name}</dd>
                                    <dt>Artist</dt>
                                    <dd>{song.artist}</dd>
                                    <dt>Album</dt>
                                    <dd>{song.album}</dd>
                                    <dt>Year</dt>
                                    <dd>{song.year}</dd>
                                    <dt>Author</dt>
                                    <dd>{song.author}</dd>
                                    <dt>Genre</dt>
                                    <dd>{song.genre}</dd>
                                    <dt>Producer</dt>
                                    <dd>{song.producer}</dd>
                                    <dt>Record Company</dt>
                                    <dd>{song.recordCompany}</dd>
                                    <dt>Stars</dt>
                                    <dd><Stars count={song.stars} /></dd>
                                </dl>
                                <Link to='/' className="btn btn-primary">Ok!</Link>
                            </div>
                            <div className="col-md-4 offset-md-4">
                                <img src={song.imageUrl} className="img-fluid" alt="Album" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Details;