import MusicApi from 'music-data-service';
import {data} from '../music';

const api = new MusicApi(data);

describe('MusicApi', () => {
  it('provides artists as a collection', () => {
    const artists = api.getArtists();
    const artistId = data.artists[0].id;
    const artistName = data.artists[0].name;

    expect(artists).toHaveProperty(artistId);
    expect(artists[artistId].name).toBe(artistName);
  });

  it('provides albums as a collection', () => {
    const albums = api.getAlbums();
    const albumId = data.albums[0].id;
    const albumName = data.albums[0].name;

    expect(albums).toHaveProperty(albumId);
    expect(albums[albumId].name).toBe(albumName);
  });
});
