import React from 'react';
import Song from './components/song/Song';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function MusicLibrary() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Song}/>
      <Route path='/Song' component={Song}/>
    </Switch>
    </BrowserRouter>
  );
}

export default MusicLibrary;
