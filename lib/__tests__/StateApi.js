import StateApi from 'state-api';
import {data} from '../music';

const store = new StateApi(data);

describe('StateApi', () => {
  it('provides artists as a collection', () => {
    const artists = store.getState().artists;
    const artistId = data.artists[0].id;
    const artistName = data.artists[0].name;

    expect(artists).toHaveProperty(artistId);
    expect(artists[artistId].name).toBe(artistName);
  });

  it('provides albums as a collection', () => {
    const albums = store.getState().albums;
    const albumId = data.albums[0].id;
    const albumName = data.albums[0].name;

    expect(albums).toHaveProperty(albumId);
    expect(albums[albumId].name).toBe(albumName);
  });
});
