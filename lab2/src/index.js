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
                id : "5cab1c88-27d9-44ed-993f-e59c2ddee11e",
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
                id : "54e79399-d29f-4826-b76a-7f4ea3f5bdb9",
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
                id : "23ecde59-64dc-42fd-bb81-d7d03f6ec278",
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
                id : "d71363e8-4c0e-47c1-a8cf-379adff58bfb",
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
                id : "7cdb1a87-39e5-421f-8336-bac78fb7e4e3",
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
