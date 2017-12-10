import React from 'react';

import MusicApi from 'music-data-service';
import {data} from '../music';

import AlbumList from './AlbumList.jsx';

const api = new MusicApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: api.getArtists(),
      albums: api.getAlbums()
    };
  }

  albumActions = {
    findArtist: (artistId) => this.state.artists[artistId]
  }

  render() {
    return (<AlbumList albums={this.state.albums} albumActions={this.albumActions}/>);
  }
}

export default App;
