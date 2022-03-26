import React from "react";
import NoteCard from "./NoteCard"

class NotesList extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NoteCard/>
        </li>
      </ul>
    );
  }
}

export default NotesList;
