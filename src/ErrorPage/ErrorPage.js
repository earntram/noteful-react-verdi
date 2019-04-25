import React from 'react';
import './ErrorPage.css'; 

export default class ErrorPage extends React.Component {
  state = {error: null};
  static getDerivedStateFromError(error) {
    return {error};
  }
  render() {
    if (this.state.error) {
      return (
        <main className="error-page">
          <div>
            <h1>Something seems to have gone wrong</h1>
            <p>Try refreshing the page</p>
            <img src='https://i.imgur.com/hH4bBg3.gif' alt='error page'></img>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}