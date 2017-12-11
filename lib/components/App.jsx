import React from 'react';

import AlbumList from './AlbumList.jsx';

class App extends React.Component {
  state = this.props.store.getState();

  render() {
    return (<AlbumList albums={this.state.albums} store={this.props.store}/>);
  }
}

export default App;
