import React from "react";
import SongApi from './SongApi';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

class SongForm extends React.Component {
    state = {
        status: 0
    }

    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let self = this;
        SongApi.getSong(this.props.idSong, function (song, lstatus) {
            if (!song) {
                self.setState({
                    status: lstatus
                });
            } else {
                song.status = lstatus;
                self.setState(song);
            }
        });
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let song = this.state;
        delete song["status"];
        SongApi.edit(song);
        this.props.history.push('/');
    }

    render() {
        if (this.state.status === 0) {
            return (<div>Loading...</div>)
        } else if (this.state.status !== 200) {
            return (<div>Sorry, but the song was not found</div>)
        } else {
            return (<div className="col-md-12">
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Song's name" onChange={this.onFieldChange} required="required"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Artist">Artist</label>
                                        <input type="text" className="form-control" name="artist" value={this.state.artist} placeholder="Artist" onChange={this.onFieldChange} required="required"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Stars">Stars</label>
                                        <input type="number" className="form-control" name="stars" value={this.state.stars} placeholder="5" max="5" min="0" onChange={this.onFieldChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Album">Album</label>
                                        <input type="text" className="form-control" name="album" value={this.state.album} placeholder="My album" onChange={this.onFieldChange} required="required"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Year">Year</label>
                                        <input type="number" className="form-control" name="year" value={this.state.year} placeholder="2018" onChange={this.onFieldChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Author">Author</label>
                                    <input type="text" className="form-control" name="author" value={this.state.author} placeholder="José M." onChange={this.onFieldChange} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="Genre">Genre</label>
                                    <input type="text" className="form-control" name="genre" value={this.state.genre} placeholder="Rock" onChange={this.onFieldChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Producer">Producer</label>
                                    <input type="text" className="form-control" name="producer" value={this.state.producer} placeholder="My producer" onChange={this.onFieldChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="RecordCompany">Record Company</label>
                                    <input type="text" className="form-control" name="recordCompany" value={this.state.recordCompany} placeholder="Movic Records" onChange={this.onFieldChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ImageUrl">Image URL:</label>
                                    <input type="text" className="form-control" name="imageUrl" value={this.state.imageUrl} placeholder="www.Images.com/image.png" onChange={this.onFieldChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button type="submit" className="btn btn-primary">Edit</button>
                            <Link to='/' className="btn btn-danger">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>)
        }
    }
}

function Edit(props) {
    return <Layout userName={SongApi.getUser()} title={"Create"}>
        <h1 className="text-center">Edit song</h1>
        <SongForm history={props.history} idSong={props.match.params.id} />
    </Layout>
}
export default Edit;