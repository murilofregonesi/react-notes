import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./style.css"

class NotesList extends React.Component {
  render() {
    return (
      <ul className="notes-list">
        {Array.of("Trabalho", "Trabalho", "Casa").map((title, index) => {
          return (
            <li key={index} className="notes-list_item">
              <div className="notes-list_title">{title}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;