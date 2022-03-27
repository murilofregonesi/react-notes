import React from "react";
import NotesList from "./components/NotesList/NotesList";
import NoteForm from "./components/NoteForm/NoteForm";

class App extends React.Component {
  render() {
    return (
      <section>
        <NoteForm />
        <NotesList />
      </section>
    );
  }
}

export default App;
