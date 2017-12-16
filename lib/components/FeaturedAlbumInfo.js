import React from 'react';

import storeProvider from './storeProvider';

const styles = {
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#636',
    display: 'inline',
    paddingRight: 3
  },
  info: {
    fontSize: 13,
    color: '#636',
    display: 'inline'
  }
};

class FeaturedAlbumInfo extends React.Component {
  render() {
    return (
      <div style={styles.album}>
        <div style={styles.title}>
          *** {this.props.featuredAlbum.title}
        </div>
        <div style={styles.info}>
          was released on {new Date(this.props.featuredAlbum.released).toDateString()}.
        </div>
        <hr/>
      </div>
    );
  }
}

function extraProps(store) {
  return {featuredAlbum: store.getState().featuredAlbum};
}

export default storeProvider(extraProps)(FeaturedAlbumInfo);
