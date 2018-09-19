import React from 'react';
import SongList from './components/songList/SongList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function MusicLibrary() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SongList}/>
    </Switch>
    </BrowserRouter>
  );
}

export default MusicLibrary;
