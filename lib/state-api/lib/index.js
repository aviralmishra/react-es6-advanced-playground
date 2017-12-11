class StateApi {
  constructor(response) {
    this.data = {
      artists: this.getCollection(response.artists),
      albums: this.getCollection(response.albums)
    };
  }

  getCollection(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  findArtistById = (artistId) => {
    return this.data.artists[artistId];
  }

  getState = () => {
    return this.data;
  }
}

export default StateApi;
