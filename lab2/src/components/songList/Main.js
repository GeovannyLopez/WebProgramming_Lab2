import React, { Component } from "react";
import '../../bootstrap.min.css';
import '../../MusicLibrary.css';
import _ from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add all icons to the library so you can use it in your page
library.add(fas, far)

///function: Stars
///descripcion: Contains the list of stars
function Stars({ count }) {
    return (
        <div>
            {_.range(count).map(i => <FontAwesomeIcon icon="star" key={i} />)}
        </div>
    );
}

///function: Tableline
///descripcion: Contains the line of a table with a song information
function Tableline({ songInfo }) {
    return (
        <tr>
            <th scope="row">{songInfo.id}</th>
            <td>{songInfo.name}</td>
            <td>{songInfo.artist}</td>
            <td>{songInfo.album}</td>
            <td>{songInfo.year}</td>
            <td><Stars count={songInfo.stars} /></td>
            <td>
                <a className="btn btn-primary" href="">
                    <FontAwesomeIcon icon="eye" />
                </a>
                <a className="btn btn-info" href="">
                    <FontAwesomeIcon icon="edit" />
                </a>
                <a className="btn btn-danger" href="">
                    <FontAwesomeIcon icon="trash-alt" />
                </a>
            </td>
        </tr>
    );
}

///function: Table
///descripcion: Contains the table
function Table({ songList }) {
    return (
        <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Song</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Year</th>
                    <th scope="col">Stars</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {songList.map((songInfo, i) => <Tableline songInfo={songInfo} key={i} />)}
            </tbody>
            <tfoot>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Song</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Year</th>
                    <th scope="col">Stars</th>
                    <th scope="col">Actions</th>
                </tr>
            </tfoot>
        </table>
    );
}



export default class Main extends Component {
    render() {
        return (
            <div className="col-md-12">

                <div className="row">
                    <div className="col-md-10" style={{ marginLeft: '10%' }}>
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Find your music:</h5>
                            </div>
                            <div className="col-md-4 offset-md-4">
                                <a className="btn btn-success float-right" href="">
                                    <FontAwesomeIcon icon="plus-circle" /> New
                                </a>
                            </div>
                        </div>
                        <br />
                        <Table songList={this.props.songList} />
                    </div>
                </div>
            </div>
        );
    }
}