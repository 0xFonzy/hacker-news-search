import React, { Component } from 'react';
import Header from './sections/Header';
import SearchResults from './sections/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchResults/>
      </div>
    );
  }
}

export default App;
