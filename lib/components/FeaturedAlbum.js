import React from 'react';

import storeProvider from './storeProvider';

const styles = {
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#636',
    display: 'inline',
    paddingRight: 10
  }
};

class FeaturedAlbum extends React.Component {
  render() {
    return (
      <div style={styles.album}>
        <div style={styles.title}>
          *** {this.props.featuredAlbum.title}
        </div><hr/>
      </div>
    );
  }
}

function extraProps(store) {
  return {featuredAlbum: store.getState().featuredAlbum};
}

export default storeProvider(extraProps)(FeaturedAlbum);
