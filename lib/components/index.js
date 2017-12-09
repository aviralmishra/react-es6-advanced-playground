import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    date: new Date(),
  };

  checkAsync = () => {
    return Promise.resolve(new Date());
  };

  async componentDidMount() {
    this.setState({
      date: await this.checkAsync()
    });
  }

  render() {
    return (
      <h2>Hello Class Components -- {this.state.date.toString()}...</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
