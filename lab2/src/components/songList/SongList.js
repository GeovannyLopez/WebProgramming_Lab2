import React, { Component } from "react";

import Layout from '../layout/Layout';
import Main from './Main';
import Hero from './Hero';

///function: getMenuData
///descripcion: Used to get the information to be displayed
function getMenuData(){
    var info = JSON.parse(localStorage.getItem('menuData'));
    return info;
}

export default class SongList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menuData: getMenuData()
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