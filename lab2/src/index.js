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
                author : "José Madero Vicaíno",
                genre : "Alternative",
                producer : "Adrián \"Rojo\" Treviño",
                recordCompany : "Universal Music México",
                imageUrl : "http://images.coveralia.com/audio/p/Panda-Sangre_Fria-Frontal.jpg?43"
            },
            {
                id : 2,
                name : 'Enfermedad en casa',
                artist : 'PXNDX',
                album : 'Sangre Fría',
                year : 2013,
                stars : 5,
                author : "José Madero Vicaíno",
                genre : "Alternative",
                producer : "Adrián \"Rojo\" Treviño",
                recordCompany : "Universal Music México",
                imageUrl : "http://images.coveralia.com/audio/p/Panda-Sangre_Fria-Frontal.jpg?43"
            },
            {
                id : 3,
                name : '3+1',
                artist : 'PXNDX',
                album : 'Para ti con desprecio',
                year : 2005,
                stars : 4,
                author : "José Madero Vicaíno",
                genre : "Alternative",
                producer : "Adrián \"Rojo\" Treviño",
                recordCompany : "Movic Records",
                imageUrl : "https://images-na.ssl-images-amazon.com/images/I/51EZ8KPYMGL.jpg"
            },
            {
                id : 4,
                name : 'Aforismos',
                artist : 'PXNDX',
                album : 'Bonanza',
                year : 2012,
                stars : 4,
                author : "José Madero Vicaíno",
                genre : "Alternative",
                producer : "Adrián \"Rojo\" Treviño",
                recordCompany : "Movic Records",
                imageUrl : "https://anton.com.mx/wp-content/uploads/2018/06/PXNDX.jpg"
            },
            {
                id : 5,
                name : 'La noche de la mesa triste',
                artist : 'PXNDX',
                album : 'Bonanza',
                year : 2012,
                stars : 5,
                author : "José Madero Vicaíno",
                genre : "Alternative",
                producer : "Adrián \"Rojo\" Treviño",
                recordCompany : "Movic Records",
                imageUrl : "https://anton.com.mx/wp-content/uploads/2018/06/PXNDX.jpg"
            }
        ]
    };
    localStorage.setItem('menuData', JSON.stringify(info));
}
initializeData();

ReactDOM.render(<MusicLibrary />, document.getElementById('root'));
registerServiceWorker();
