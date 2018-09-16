import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicLibrary from './MusicLibrary';
import registerServiceWorker from './registerServiceWorker';


const state ={
    menuData: 
    {
        userName : 'Geovanny',
        songs: [
            {
                id : 1,
                name : '10 AM',
                artist : 'PXNDX',
                album : 'Sangre Fría',
                year : 2013,
            },
            {
                id : 2,
                name : 'Enfermedad en casa',
                artist : 'PXNDX',
                album : 'Sangre Fría',
                year : 2013,
            },
            {
                id : 3,
                name : '3+1',
                artist : 'PXNDX',
                album : 'Para ti con desprecio',
                year : 2005,
            },
            {
                id : 4,
                name : 'Aforismos',
                artist : 'PXNDX',
                album : 'Bonanza',
                year : 2012,
            },
            {
                id : 5,
                name : 'La noche de la mesa triste',
                artist : 'PXNDX',
                album : 'Bonanza',
                year : 2012,
            }
        ]
    }
};

ReactDOM.render(<MusicLibrary {...state}/>, document.getElementById('root'));
registerServiceWorker();
