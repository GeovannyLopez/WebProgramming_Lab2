import React, { Component } from "react";
import SongApi from './SongApi';
import Stars from '../shared/Stars';
import { Link } from 'react-router-dom';

import Layout from '../layout/Layout';

export default class Details extends Component {
    state = {
        song: {},
        status: 0
    }

    componentDidMount() {
        let self = this;
        SongApi.getSong(this.props.match.params.id, function (song, status) {
            self.setState({
                song: song,
                status: status
            });
        });
    }
    render() {
        if (this.state.status === 0) {
            return (<div>Loading...</div>)
        } else if (this.state.status !== 200) {
            return (<div>Sorry, but the song was not found</div>)
        } else {
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
                                            <dd>{this.state.song.name}</dd>
                                            <dt>Artist</dt>
                                            <dd>{this.state.song.artist}</dd>
                                            <dt>Album</dt>
                                            <dd>{this.state.song.album}</dd>
                                            <dt>Year</dt>
                                            <dd>{this.state.song.year}</dd>
                                            <dt>Author</dt>
                                            <dd>{this.state.song.author}</dd>
                                        </dl>
                                        <Link to='/' className="btn btn-primary">Ok!</Link>
                                    </div>
                                    <div className="col-md-4">
                                        <dl>
                                            <dt>Genre</dt>
                                            <dd>{this.state.song.genre}</dd>
                                            <dt>Producer</dt>
                                            <dd>{this.state.song.producer}</dd>
                                            <dt>Record Company</dt>
                                            <dd>{this.state.song.recordCompany}</dd>
                                            <dt>Stars</dt>
                                            <dd><Stars count={this.state.song.stars} /></dd>
                                        </dl>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={this.state.song.imageUrl} className="img-fluid" alt="Album" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            );
        }
    }

}