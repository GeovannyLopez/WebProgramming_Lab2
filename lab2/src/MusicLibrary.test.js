import React from 'react';
import ReactDOM from 'react-dom';
import MusicLibrary from './MusicLibrary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
