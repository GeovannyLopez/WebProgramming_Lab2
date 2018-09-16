import React, { Component } from 'react';
import './bootstrap.min.css';
import './MusicLibrary.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add all icons to the library so you can use it in your page
library.add(fas, far)

///function: Topbar
///descripcion: Contains the top upper navbar of the page
function Topbar({ userName }) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="jsx-a11y/href-no-hash">Welcome {userName}!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="jsx-a11y/href-no-hash">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

///function: Hero
///descripcion: Contains the title and important information of the page
function Hero() {
  return (
    <h1 className="text-center">My music library</h1>
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
      <td>
        <a className="btn btn-primary" href="jsx-a11y/href-no-hash">
          <FontAwesomeIcon icon="eye" />
        </a>
        <a className="btn btn-info" href="jsx-a11y/href-no-hash">
          <FontAwesomeIcon icon="edit" />
        </a>
        <a className="btn btn-danger" href="jsx-a11y/href-no-hash">
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
          <th scope="col">Actions</th>
        </tr>
      </tfoot>
    </table>
  );
}

///function: Main
///descripcion: Contains the main content of the page
function Main({ songList }) {
  return (
    <div className="col-md-12">

      <div className="row">
        <div className="col-md-10" style={{ marginLeft: '10%' }}>
          <div className="row">
            <div className="col-md-4">
              <h5>Find your music:</h5>
            </div>
            <div className="col-md-4 offset-md-4">
              <a className="btn btn-success float-right" href="jsx-a11y/href-no-hash">
                <FontAwesomeIcon icon="plus-circle" /> New
                </a>
            </div>
          </div>
          <br />
          <Table songList={songList} />
        </div>
      </div>

    </div>
  );
}


///function: Footer
///descripcion: Contains the footer of the page
function Footer({ songList }) {
  return (
    <div className="footer">
        <div className="container">
          <p className="text-muted">Creado por Geovanny López</p>
        </div>
      </div>
  );
}

function MusicLibrary({ menuData }) {
  return (
    <div className="wrapper">
      <Topbar userName={menuData.userName} />
      <Hero />
      <Main songList={menuData.songs} />
      <Footer />
    </div>
  );
}

export default MusicLibrary;
