import React from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";

import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    this.setState({
      notes: [...this.state.notes, {title, text}]
    });
  }

  render() {
    return (
      <section className="content">
        <NoteForm
          createNote={this.createNote.bind(this)}
        />
        <NotesList
          notes={this.state.notes}
        />
      </section>
    );
  }
}

export default App;
