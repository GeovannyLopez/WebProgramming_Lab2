import React, { Component } from "react";

import Layout from '../layout/Layout';
import Main from './Main';
import Hero from './Hero';

export default class SongList extends Component{
    render (){
        return (
            <Layout userName={this.props.userName}>
                <Hero />
                <Main songList={this.props.songs} />
            </Layout>
        );
    }
}