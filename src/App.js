import React from "react";
import CategoryList from "./components/CategoryList"
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";

import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: [],
    };
  }

  createNote(title, text) {
    this.setState({
      notes: [...this.state.notes, {title, text}]
    });
  }

  createCategory(title) {
    this.setState({
      categories: [...this.state.categories, title]
    });
  }

  deleteNote(index) {
    let newNotesList = this.state.notes;
    newNotesList.splice(index, 1);

    this.setState({
      notes: newNotesList
    });
  }

  render() {
    return (
      <section className="content">
        <NoteForm
          createNote={this.createNote.bind(this)}
        />
        <section className="content-notes">
          <CategoryList
            categories={this.state.categories}
            createCategory={this.createCategory.bind(this)}
          />
          <NotesList
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </section>
      </section>
    );
  }
}

export default App;
