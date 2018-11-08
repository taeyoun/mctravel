import React, { Component } from 'react';
import logo from './logo.svg';
import headerimage from './header-image.png';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SearchFlightInfo from './SearchFlightInfo';
import MenuLink from './MenuLink';
import SearchResult from './SearchResult';

const SearchFlightInfoTest = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2000-11-17 21:23:00",
        lastestCommit: {
            message: 'Initial commit'
        }
    }
];




class App extends Component {
  render() {
    return (
      <div className="App">
            <MenuLink/>
            <header className="App-header">
            <SearchFlightInfo></SearchFlightInfo>
            <SearchResult/>
        </header>
      </div>
    );
  }
}

export default App;
