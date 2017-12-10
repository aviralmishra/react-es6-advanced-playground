import React from 'react';

const styles = {
  album: {
    fontFamily: 'Verdana, Geneva, sans-serif',
    fontSize: 13,
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.85em',
    color: '#888'
  },
  artist: {
    paddingTop: 10,
    paddingBottom: 10
  },
  description: {
    paddingLeft: 20
  }
};

const formatDate = (dateString) => new Date(dateString).toDateString();

const Album = (props) => {
  const {album, actions} = props;
  const artist = actions.findArtist(album.artistId);

  return (<div style={styles.album}>
    <div style={styles.title}>{album.title}</div>
    <div style={styles.artist}>
      <a href={artist.wikipedia}>{artist.name}</a>
    </div>
    <div style={styles.date}>
      {formatDate(album.released)}
    </div>
    <div style={styles.description}>{album.description}</div>
  </div>);
};

export default Album;
