import React, { Component } from "react";
import '../../bootstrap.min.css';
import '../../MusicLibrary.css';

import Topbar from './Topbar';
import Footer from './Footer';

export default class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                <Topbar userName={this.props.userName} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}