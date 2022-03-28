import React from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";

import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  createNote(title, text) {
    console.log(`${title} ${text}`);
  }

  render() {
    return (
      <section className="content">
        <NoteForm
          createNote={this.createNote}
        />
        <NotesList />
      </section>
    );
  }
}

export default App;
