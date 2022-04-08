import React from "react";
import NoteCard from "../NoteCard";
import "./style.css"

class NotesList extends React.Component {
  constructor(props) {
    super(props);

    this._handleListener = this._handleListener.bind(this);

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.props.notes.addListener(this._handleListener);
  }

  componentWillUnmount() {
    this.props.notes.removeListener(this._handleListener);
  }

  _handleListener(notes) {
    this.setState({notes});
  }

  render() {
    return (
      <ul className="notes-list">
        {this.state.notes.map((note, index) => {
          return (
            <li key={index} className="notes-list_item">
              <NoteCard
                index={index}
                title={note.title}
                text={note.text}
                category={note.category}
                deleteNote={this.props.notes.removeNote.bind(this.props.notes)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
