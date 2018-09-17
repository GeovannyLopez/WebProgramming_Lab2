import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicLibrary from './MusicLibrary';
import registerServiceWorker from './registerServiceWorker';

///function: initializeData
///descripcion: Used to get initialize information into localstorage
function initializeData(){
    let info = {
        userName : 'Geovanny',
        songs: [
            {
                id : 1,
                name : '10 AM',
                artist : 'PXNDX',
                album : 'Sangre Fría',
                year : 2013,
                stars : 5,
            },
            {
                id : 2,
                name : 'Enfermedad en casa',
                artist : 'PXNDX',
                album : 'Sangre Fría',
                year : 2013,
                stars : 5,
            },
            {
                id : 3,
                name : '3+1',
                artist : 'PXNDX',
                album : 'Para ti con desprecio',
                year : 2005,
                stars : 5,
            },
            {
                id : 4,
                name : 'Aforismos',
                artist : 'PXNDX',
                album : 'Bonanza',
                year : 2012,
                stars : 4,
            },
            {
                id : 5,
                name : 'La noche de la mesa triste',
                artist : 'PXNDX',
                album : 'Bonanza',
                year : 2012,
                stars : 5,
            }
        ]
    };
    localStorage.setItem('menuData', JSON.stringify(info));
}

///function: getMenuData
///descripcion: Used to get the information to be displayed
function getMenuData(){
    //This call is only to initialize the information into local storage
    initializeData();
    var info = JSON.parse(localStorage.getItem('menuData'));
    return info;
}

const state ={
    menuData: getMenuData()
};

ReactDOM.render(<MusicLibrary {...state}/>, document.getElementById('root'));
registerServiceWorker();
