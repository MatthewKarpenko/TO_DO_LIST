import React from 'react';

import NotesList from './NotesList';
import NoteCreation from './NoteCreation';
import '../app.scss'


function App() {
  return (
    <div className="App">
      <h1 className='app-name'>List</h1>
    <NoteCreation />
    <NotesList />
    </div>
  );
}

export default App;
