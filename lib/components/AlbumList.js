import React from 'react';

import Album from './Album';

class AlbumList extends React.PureComponent {
  render() {
    return (
      <div>
        {
          Object.values(this.props.albums).map(album => {
            return <Album key={album.id} album={album}/>;
          })
        }
      </div>
    );
  }
}

export default AlbumList;
