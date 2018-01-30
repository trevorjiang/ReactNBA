import React from 'react';
import nba from '../assets/images/nba-logoman-word-white.svg';

export class TopNavBar extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={nba} className="App-logo" alt="logo" />
      </header>
    );
  }
}