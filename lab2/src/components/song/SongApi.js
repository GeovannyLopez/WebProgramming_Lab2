import _ from 'lodash';
import axios from 'axios';

let userName = 'Geovanny';
let endpoint = 'http://localhost:8080/api/v1/songs';

class SongApi {
    ///function: getUser
    ///descripcion: Used to get the information of the current user
    static getUser() {
        return userName;
    }

    ///function: create
    ///descripcion: Used to create a song
    static create(song) {
        axios.post(endpoint, song)
        .then(res => console.log(res.data));
    }

    ///function: getSong
    ///descripcion: Used to get the information to be displayed for a song
    static getSong(id, callback) {
        axios.get(endpoint + '/' + id)
            .catch(error => {
                console.log(error);
                callback(null, error.response.status);
            })
            .then(res => {
                if (typeof res !== "undefined") {
                    console.log(res.data);
                    var song = res.data;
                    callback(song, res.status);
                }
            });
    }

    ///function: getAll
    ///descripcion: Used to get the information to be displayed
    static getAll(callback) {
        let info = {};
        info.userName = userName;

        axios.get(endpoint)
            .then(res => {
                console.log(res.data);
                info.songs = res.data;
                callback(info);
            });
    }

    ///function: delete
    ///descripcion: Used to delete a song by it's id
    static delete(id) {
        var info = JSON.parse(localStorage.getItem('menuData'));
        _.remove(info.songs, function (song) {
            return song.id === id;
        });

        localStorage.setItem('menuData', JSON.stringify(info));
        return info;
    }

    ///function: create
    ///descripcion: Used to create a song
    static edit(song) {
        let info = JSON.parse(localStorage.getItem('menuData'));
        let objIndex = info.songs.findIndex((obj => obj.id === song.id));

        //Update object's name property.
        info.songs[objIndex] = song;
        localStorage.setItem('menuData', JSON.stringify(info));
        return info;
    }
}
export default SongApi