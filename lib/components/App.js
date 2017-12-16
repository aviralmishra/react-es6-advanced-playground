import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './AlbumList';
import SearchBar from './SearchBar';
import FeaturedAlbum from './FeaturedAlbum';
import FeaturedAlbumInfo from './FeaturedAlbumInfo';

import pickBy from 'lodash.pickby';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {store: this.props.store};
  }

  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.tickFeaturedAlbum();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let {albums, searchTerm} = this.state;
    const searchRE = new RegExp(searchTerm, 'i');

    if (searchTerm) {
      albums = pickBy(albums, (value) => {
        return (value.title.match(searchRE)) || (
          this.props.store.findArtistById(value.artistId).name.match(searchRE)
        );
      });
    }

    return (
      <div>
        <SearchBar/>
        <FeaturedAlbum/>
        <AlbumList albums={albums}/>
        <FeaturedAlbumInfo/>
      </div>
    );
  }
}

export default App;
