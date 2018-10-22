import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicLibrary from './MusicLibrary';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MusicLibrary />, document.getElementById('root'));
registerServiceWorker();
