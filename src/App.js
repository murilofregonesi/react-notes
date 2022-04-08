import React from "react";
import CategoryList from "./components/CategoryList"
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";

import Notes from "./data/Notes";
import Categories from "./data/Categories";

import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.notes = new Notes();
    this.categories = new Categories();
  }

  render() {
    return (
      <section className="content">
        <NoteForm
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <section className="content-notes">
          <CategoryList
            categories={this.categories}
          />
          <NotesList
            notes={this.notes}
          />
        </section>
      </section>
    );
  }
}

export default App;
