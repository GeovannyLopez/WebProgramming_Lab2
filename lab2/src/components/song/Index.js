import React, { Component } from "react";

import Layout from '../layout/Layout';
import Main from './Main';
import Hero from './Hero';
import SongApi from './SongApi';

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menuData: SongApi.getAll()
        };
    }    
    render (){
        return (
            <Layout userName={this.state.menuData.userName}>
                <Hero />
                <Main songList={this.state.menuData.songs} />
            </Layout>
        );
    }
}