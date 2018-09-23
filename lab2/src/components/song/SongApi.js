import _ from 'lodash';

class SongApi {
    ///function: getUser
    ///descripcion: Used to get the information of the current user
    static getUser() {
        var info = JSON.parse(localStorage.getItem('menuData'));

        return info.userName;
    }

    ///function: getSong
    ///descripcion: Used to get the information to be displayed for a song
    static getSong(id) {
        var info = JSON.parse(localStorage.getItem('menuData'));

        var song = info.songs.find((song) => {
            return song.id === id;
        });

        return song;
    }

    ///function: getAll
    ///descripcion: Used to get the information to be displayed
    static getAll() {
        var info = JSON.parse(localStorage.getItem('menuData'));
        return info;
    }

    ///function: delete
    ///descripcion: Used to delete a song by it's id
    static delete(id) {
        var info = JSON.parse(localStorage.getItem('menuData'));
        _.remove(info.songs, function (song) {
            return song.id === parseInt(id, 10);
        });

        localStorage.setItem('menuData', JSON.stringify(info));
        return info;
    }
}
export default SongApi