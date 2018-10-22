import React, { Component } from "react";

import Layout from '../layout/Layout';
import Main from './Main';
import Hero from './Hero';
import SongApi from './SongApi';

export default class Index extends Component {
    state = {
        menuData: {
            userName : '',
            songs : []
        }
    }

    componentDidMount() {
        let self = this;
        SongApi.getAll(function(lMenuData){
            self.setState({
                menuData: lMenuData
            });
        });
    }
    render() {
        return (
            <Layout userName={this.state.menuData.userName}>
                <Hero />
                <Main songList={this.state.menuData.songs} />
            </Layout>
        );
    }
}