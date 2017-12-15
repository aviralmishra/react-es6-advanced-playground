import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './AlbumList';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {store: this.props.store};
  }

  state = this.props.store.getState();

  render() {
    return (<AlbumList albums={this.state.albums} store={this.props.store}/>);
  }
}

export default App;