import React from "react";
import SongApi from './SongApi';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: guid(),
            name: '',
            artist: '',
            album: '',
            year: 2018,
            stars: 5,
            author: '',
            genre: '',
            producer: '',
            recordCompany: '',
            imageUrl: ''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        SongApi.create(this.state);
        this.props.history.push('/');
    }

    render() {
        return <div className="col-md-12">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Song's name" onChange={this.onFieldChange} />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="Artist">Artist</label>
                                    <input type="text" className="form-control" name="artist" value={this.state.artist} placeholder="Artist"  onChange={this.onFieldChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="Stars">Stars</label>
                                    <input type="number" className="form-control" name="stars" value={this.state.stars} placeholder="Stars" max="5" min="0" onChange={this.onFieldChange} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="Album">Album</label>
                                    <input type="text" className="form-control" name="album" value={this.state.album} placeholder="Album"  onChange={this.onFieldChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="Year">Year</label>
                                    <input type="number" className="form-control" name="year" value={this.state.year} placeholder="Year" onChange={this.onFieldChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Author">Author</label>
                                <input type="text" className="form-control" name="author" value={this.state.author} placeholder="Author"  onChange={this.onFieldChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Genre">Genre</label>
                                <input type="text" className="form-control" name="genre" value={this.state.genre} placeholder="Genre" onChange={this.onFieldChange}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Producer">Producer</label>
                                <input type="text" className="form-control" name="producer" value={this.state.producer} placeholder="Producer"  onChange={this.onFieldChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="RecordCompany">Record Company</label>
                                <input type="text" className="form-control" name="recordCompany" value={this.state.recordCompany} placeholder="Record Company"  onChange={this.onFieldChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ImageUrl">Image URL:</label>
                                <input type="text" className="form-control" name="imageUrl" value={this.state.imageUrl} placeholder="Image URL"  onChange={this.onFieldChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Create</button>
                            <Link to='/' className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>

                </div>
            </div>
        </div>;
    }
}




function Create(props) {
    return <Layout userName={SongApi.getUser()} title={"Create"}>
        <h1 className="text-center">Create new song</h1>
        <SongForm history={props.history}/>
    </Layout>
}
export default Create;