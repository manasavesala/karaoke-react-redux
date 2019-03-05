import React from 'react';
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import Header from './Header';
import AddSong from './AddSong';

function App(){
  return (
    <div>
      <Header />
      <br/>
      <SongList />
      <hr/>
      <SongDisplay />
      <hr />
      <AddSong />
    </div>
  );
}

export default App;

