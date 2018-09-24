import React, { Component } from "react";
import '../../bootstrap.min.css';
import '../../MusicLibrary.css';
import { Link } from 'react-router-dom';
import Stars from '../shared/Stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add all icons to the library so you can use it in your page
library.add(fas, far);

///function: TableRow
///descripcion: Contains the line of a table with a song information
function TableRow({ songInfo, number}) {
    return (
        <tr>
            <th scope="row">{number}</th>
            <td>{songInfo.name}</td>
            <td>{songInfo.artist}</td>
            <td>{songInfo.album}</td>
            <td>{songInfo.year}</td>
            <td><Stars count={songInfo.stars} /></td>
            <td>
            <Link to={`/Song/Details/${songInfo.id}`} className="btn btn-primary">
                <FontAwesomeIcon icon="eye" />
            </Link>
            <Link to={`/Song/Edit/${songInfo.id}`} className="btn btn-info">
                <FontAwesomeIcon icon="edit" />
            </Link>
            <Link to={`/Song/Delete/${songInfo.id}`} className="btn btn-danger">
                <FontAwesomeIcon icon="trash-alt" />
            </Link>
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
                {songList.map((songInfo, i) => <TableRow songInfo={songInfo} key={i} number={i+1}/>)}
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
                                <Link to='/Song/Create' className="btn btn-success float-right">
                                    <FontAwesomeIcon icon="plus-circle" /> New
                                </Link>

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