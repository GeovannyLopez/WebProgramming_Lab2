import React from 'react';
import SongList from './components/songList/SongList';

function MusicLibrary({ menuData }) {
  return (
      <SongList userName={menuData.userName} songs={menuData.songs} />
  );
}

export default MusicLibrary;
