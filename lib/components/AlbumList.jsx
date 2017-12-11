import React from 'react';

import Album from './Album.jsx';

const AlbumList = (props) => {
  return (<div>
    {
      Object.values(props.albums).map(album => {
        return <Album key={album.id} album={album} store={props.store}/>;
      })
    }
  </div>);
};

export default AlbumList;
