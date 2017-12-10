class MusicApi {
  constructor(response) {
    this.response = response;
  }

  getCollection(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArtists() {
    return this.getCollection(this.response.artists);
  }

  getAlbums() {
    return this.getCollection(this.response.albums);
  }
}

export default MusicApi;