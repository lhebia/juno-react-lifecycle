import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      artwork: []
    }
  }

  componentDidMount() {
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',      
      method: 'GET',      
      dataType: 'json',      
      params: {        
        key: '4H66F4YK',        
        format: 'json'
      }
    }).then( (response) => {
      console.log(response.data.artObjects);
      this.setState({
        artwork: response.data.artObjects
      });
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Art Gallery</h1>

        {
          this.state.artwork.map((piece, index) => {
            return (
              <Fragment key={index}>
                <h2>{piece.title}</h2>
                <img src={piece.webImage.url} alt={piece.longTitle} />
              </Fragment>
            );
          })
        }
      </div>
    );

  }
}

export default App;
