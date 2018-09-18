import React, { Component } from "react";
import '../../bootstrap.min.css';
import '../../MusicLibrary.css';

export default class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <div className="container">
            <p className="text-muted">Created by Geovanny López</p>
            </div>
        </div>
    );
    }
}