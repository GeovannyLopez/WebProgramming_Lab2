import React from "react";
import SongApi from './SongApi';
import Stars from '../shared/Stars';
import { Link } from 'react-router-dom';

import Layout from '../layout/Layout';

export default class Delete extends React.Component {
    state = {
        status: 0
    }

    constructor(props) {
        super(props);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    componentDidMount() {
        let self = this;
        SongApi.getSong(this.props.match.params.id, function (song, status) {
            if (!song) {
                self.setState({
                    status: status
                });
            } else {
                song.status = status;
                self.setState(song);
            }

        });
    }

    ///function: confirmDelete
    ///descripcion: Used to confirm a delete, this redirects to main page
    confirmDelete() {
        SongApi.delete(this.state._id);
        this.props.history.push('/');
    }

    render() {
        if (this.state.status === 0) {
            return (<Layout userName={SongApi.getUser()}>
                <h1>Loading...</h1>
            </Layout>)
        } else if (this.state.status !== 200) {
            return (<Layout userName={SongApi.getUser()}>
                <h1>Sorry, but the song was not found</h1>
            </Layout>)
        } else {
            return (
                <Layout userName={SongApi.getUser()}>
                    <div>
                        <h1 className="text-center">¿Are you sure you want to delete the song?</h1>

                        <div className="col-md-12">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <dl>
                                            <dt>Song</dt>
                                            <dd>{this.state.name}</dd>
                                            <dt>Artist</dt>
                                            <dd>{this.state.artist}</dd>
                                            <dt>Album</dt>
                                            <dd>{this.state.album}</dd>
                                            <dt>Year</dt>
                                            <dd>{this.state.year}</dd>
                                            <dt>Stars</dt>
                                            <dd><Stars count={this.state.stars} /></dd>
                                        </dl>
                                        <button type="button" className="btn btn-primary" onClick={this.confirmDelete}>Confirm</button>
                                        <Link to='/' className="btn btn-danger">Cancel</Link>
                                    </div>
                                    <div className="col-md-4 offset-md-4">
                                        <img src={this.state.imageUrl} className="img-fluid" alt="Album" />
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