import React from "react";
import NoteCard from "../NoteCard";
import "./style.css"

class NotesList extends React.Component {
  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index} className="notes-list_item">
              <NoteCard
                index={index}
                title={note.title}
                text={note.text}
                category={note.category}
                deleteNote={this.props.deleteNote}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
