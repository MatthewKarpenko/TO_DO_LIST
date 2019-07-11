import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";

import { postNote } from '../actions';

class NoteCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
    this.getTitle = React.createRef();
    this.getContent = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.textTitle = this.textTitle.bind(this)
    this.textContent = this.textContent.bind(this)
  }

  textTitle() {
    this.setState({ title: this.getTitle.current.value });
    console.log(this.state.title);
  }
  textContent() {
    this.setState({ content: this.getContent.current.value });
    console.log(this.state.content);
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = this.state.title;
    const content = this.state.content;
    const data = {
      title,
      content
    };
    this.props.postNote({type: "POST_NOTE", payload: data});
    this.setState({title: ''})
    this.setState({content: ''})
  };
  render() {
    return (
      <div className="note-creation-holder">
        <form onSubmit={this.handleSubmit}>
          <div className="ui form">
            <div className="field">
              <p>Short Text</p>
              <textarea
                ref={this.getTitle}
                value={this.state.title}
                onChange={this.textTitle}
                rows="2"
              />
            </div>
            <div className="field">
              <p>Text</p>
              <textarea
                ref={this.getContent}
                value={this.state.content}
                onChange={this.textContent}
              />
            </div>
          </div>
          <Button>Create</Button>
        </form>
        {this.props.createdNotes.map(note => {
          return <div>{note.title}</div>
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { createdNotes: state.createdNotes };
};

export default connect(mapStateToProps,{postNote})(NoteCreation)