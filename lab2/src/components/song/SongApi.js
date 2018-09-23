class SongApi {
    ///function: getSong
    ///descripcion: Used to get the information to be displayed for a song
    static getSong(id){
        var info = JSON.parse(localStorage.getItem('menuData'));
    
        var song = info.songs.find((song) => {
            return song.id === id;
          });
    
        return song;
    }

    ///function: getAll
    ///descripcion: Used to get the information to be displayed
    static getAll(){
        var info = JSON.parse(localStorage.getItem('menuData'));
        return info;
    }
}
export default SongApi