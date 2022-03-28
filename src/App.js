import React from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";

import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  render() {
    return (
      <section className="content">
        <NoteForm />
        <NotesList />
      </section>
    );
  }
}

export default App;
