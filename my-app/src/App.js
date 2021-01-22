import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AudioControls from './components/AudioControls';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }
  componentDidMount() {
    this.setState({
      songs: this.generateData()
    })
 }
  generateData = () => {
    return [
      {
         "name":"SoundHelix Song 1",
         "artist":'T. Schürger',
         "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        "name":"SoundHelix Song 2",
        "artist":'T. Schürger',
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        "name":"SoundHelix Song 3",
        "artist":'T. Schürger',
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        "name":"SoundHelix Song 4",
        "artist":'T. Schürger',
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        "name":"SoundHelix Song 5",
        "artist":'T. Schürger',
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        "name":"SoundHelix Song 6",
        "artist":'T. Schürger',
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
   ];
  
  }
  render() {
   const { songs } = this.state;
    return (
      <div>
        <Header />
        <div class="row">
          <div class="col-3 col-s-3 menu">
            <ul>
              <li>Profile</li>
              <li>Favourite Station</li>
              <li>languages</li>
            </ul>
          </div>
          <div class="col-6 col-s-9">
            <h1>Song App</h1>
            <p>Listen to your favourite songs</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-s-12">
          <table>
            <tr>
              <th>Name</th>
              <th>Artist</th>
              <th>Song</th>
            </tr>
            {
              songs.map((song) => {
                return(
                  <tr>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td><AudioControls/></td>
                  </tr>
                );
              })
            }
            </table> 
          </div>
        </div>
        <Footer/>
      </div>
    );

  }
  
}

export default App;
