import React from 'react';

import Album from './Album';

const AlbumList = (props) => {
  return (
    <div>
      {
        Object.values(props.albums).map(album => {
          return <Album key={album.id} album={album}/>;
        })
      }
    </div>
  );
};

export default AlbumList;
