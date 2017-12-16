import pickBy from 'lodash.pickby';

class StateApi {
  constructor(response) {
    const artists = this.getCollection(response.artists),
      albums = this.getCollection(response.albums);

    this.data = {
      artists: artists,
      albums: albums,
      searchTerm: '',
      featuredAlbum: (albums[Object.keys(albums)[0]])
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
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

  subscribe = cb => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };

  mergeWithState = stateChange => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  };

  setSearchTerm = searchTerm => {
    this.mergeWithState({searchTerm});
  };

  tickFeaturedAlbum = () => {
    setInterval(() => {
      let albums = this.data.albums;
      const searchRE = new RegExp(this.data.searchTerm, 'i');

      if (this.data.searchTerm) {
        albums = pickBy(albums, (value) => {
          return (value.title.match(searchRE)) || (
            this.findArtistById(value.artistId).name.match(searchRE)
          );
        });
      }

      this.mergeWithState({
        featuredAlbum: (
          albums[Object.keys(albums)[Math.floor(Math.random() * Object.keys(albums).length)]]
        )
      });
    }, 1000);
  }
}

export default StateApi;
