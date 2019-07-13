import React from "react";

import NotesList from "./NotesList";
import NoteCreation from "./NoteCreation";
import "../app.scss";

function App() {
  return (
    <div className="App">
      <h1 className="app-name">
        List
        
      </h1>

      <div className="main-components">
        <NoteCreation />
        <NotesList />
      </div>
    </div>
  );
}

export default App;
