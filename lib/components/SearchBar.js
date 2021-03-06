import React from 'react';
import debounce from 'lodash.debounce';

import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => {
      this.doSearch();
    });
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Artist or Album"
          value={this.state.searchTerm}
          onChange={this.handleSearch}/>
        <hr/>
      </div>
    );
  }
}

export default storeProvider()(SearchBar);
