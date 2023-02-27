import React from 'react';
import NoteList from './NoteList';
import Note from './Note';

function App() {
  return <div className='container'>
    <div className='top'>
      <div className='button'>
        <button id="list">≡</button>
      </div>
      <div className='name'>
        <h1>Lotion</h1>
        <small>Like Notion, but worse.</small>
      </div>
    </div>
    <div className='page'>
      <div className='list'>
        <NoteList />
      </div>
      <Note />
    </div>
  </div>;
}

export default App;   
