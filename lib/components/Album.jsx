import React from 'react';

const styles = {
  album: {
    fontFamily: 'Verdana, Geneva, sans-serif',
    fontSize: 12,
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#f60',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#c36',
    display: 'inline',
    paddingRight: 10
  },
  date: {
    fontSize: '0.90em',
    color: '#06f',
    fontWeight: 'bold',
    display: 'inline',
    paddingRight: 10
  },
  artist: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'inline',
    paddingRight: 10
  },
  description: {
    paddingLeft: 20
  }
};

const formatDate = (dateString) => new Date(dateString).toDateString();

const Album = (props) => {
  const {album, store} = props;
  const artist = store.findArtistById(album.artistId);

  return (<div style={styles.album}>
    <div style={styles.title}>{album.title}</div>
    <div style={styles.artist}>
      <a href={artist.wikipedia}>{artist.name}</a>
    </div>
    <div style={styles.date}>{formatDate(album.released)}</div>
    <div style={styles.description}>{album.description}</div>
  </div>);
};

export default Album;
