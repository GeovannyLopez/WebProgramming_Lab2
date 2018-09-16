import React, { Component } from 'react';
import './bootstrap.min.css';
import './MusicLibrary.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add all icons to the library so you can use it in your page
library.add(fas, far)
class MusicLibrary extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="jsx-a11y/href-no-hash">Welcome Geovanny!</a>
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
        <h1 className="text-center">My music library</h1>

        <div className="col-md-12">

          <div className="row">
            <div className="col-md-10" style={{ marginLeft: '10%' }}>
              <div className="row">
                <div className="col-md-4">
                  <h5>Find your music:</h5>
                </div>
                <div className="col-md-4 offset-md-4"><a className="btn btn-success float-right" href="jsx-a11y/href-no-hash" onClick="CreateFunction()">
                  <FontAwesomeIcon
                    icon="plus-circle"
                  /> New
                                </a>
                </div>
              </div>
              <br />
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
                  <tr>
                    <th scope="row">1</th>
                    <td>10 AM</td>
                    <td>PXNDX</td>
                    <td>Sangre Fría</td>
                    <td>2013</td>
                    <td>
                      <a className="btn btn-primary" href="jsx-a11y/href-no-hash" onClick="DetailsFunction(1)">
                          <FontAwesomeIcon icon="eye"/>
                      </a>
                      <a className="btn btn-info" href="jsx-a11y/href-no-hash" onClick="EditFunction(1)">
                        <FontAwesomeIcon icon="edit"/>
                      </a>
                      <a className="btn btn-danger" href="jsx-a11y/href-no-hash" onClick="DeleteFunction(1)">
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Enfermedad en casa</td>
                    <td>PXNDX</td>
                    <td>Sangre Fría</td>
                    <td>2013</td>
                    <td>
                      <a className="btn btn-primary" href="jsx-a11y/href-no-hash" onClick="DetailsFunction(2)">
                          <FontAwesomeIcon icon="eye"/>
                      </a>
                      <a className="btn btn-info" href="jsx-a11y/href-no-hash" onClick="EditFunction(2)">
                        <FontAwesomeIcon icon="edit"/>
                      </a>
                      <a className="btn btn-danger" href="jsx-a11y/href-no-hash" onClick="DeleteFunction(2)">
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>3+1</td>
                    <td>PXNDX</td>
                    <td>Para ti con desprecio</td>
                    <td>2005</td>
                    <td>
                      <a className="btn btn-primary" href="jsx-a11y/href-no-hash" onClick="DetailsFunction(3)">
                          <FontAwesomeIcon icon="eye"/>
                      </a>
                      <a className="btn btn-info" href="jsx-a11y/href-no-hash" onClick="EditFunction(3)">
                        <FontAwesomeIcon icon="edit"/>
                      </a>
                      <a className="btn btn-danger" href="jsx-a11y/href-no-hash" onClick="DeleteFunction(3)">
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Aforismos</td>
                    <td>PXNDX</td>
                    <td>Bonanza</td>
                    <td>2012</td>
                    <td>
                      <a className="btn btn-primary" href="jsx-a11y/href-no-hash" onClick="DetailsFunction(4)">
                          <FontAwesomeIcon icon="eye"/>
                      </a>
                      <a className="btn btn-info" href="jsx-a11y/href-no-hash" onClick="EditFunction(4)">
                        <FontAwesomeIcon icon="edit"/>
                      </a>
                      <a className="btn btn-danger" href="jsx-a11y/href-no-hash" onClick="DeleteFunction(4)">
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>La noche de la mesa triste</td>
                    <td>PXNDX</td>
                    <td>Bonanza</td>
                    <td>2012</td>
                    <td>
                      <a className="btn btn-primary" href="jsx-a11y/href-no-hash" onClick="DetailsFunction(5)">
                          <FontAwesomeIcon icon="eye"/>
                      </a>
                      <a className="btn btn-info" href="jsx-a11y/href-no-hash" onClick="EditFunction(5)">
                        <FontAwesomeIcon icon="edit"/>
                      </a>
                      <a className="btn btn-danger" href="jsx-a11y/href-no-hash" onClick="DeleteFunction(5)">
                        <FontAwesomeIcon icon="trash-alt"/>
                      </a>
                    </td>
                  </tr>
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
            </div>
          </div>

        </div>
        <div className="footer">
          <div className="container">
            <p className="text-muted">Creado por Geovanny López</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicLibrary;
