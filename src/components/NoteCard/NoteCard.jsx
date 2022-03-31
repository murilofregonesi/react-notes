import React from "react";
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg";

class NoteCard extends React.Component {
  _delete() {
    this.props.deleteNote(this.props.index);
  }

  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">{this.props.title}</h3>
          <img src={deleteSVG} alt="delete"
            onClick={this._delete.bind(this)}
          />
        </header>
        <p className="note-card_text">{this.props.text}</p>
      </section>
    );
  }
}

export default NoteCard;
