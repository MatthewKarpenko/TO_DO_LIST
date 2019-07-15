import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Icon, Segment, Dropdown } from "semantic-ui-react";

import NoteCreation from "./NoteCreation";
import { fetchNotes } from "../actions";
import AskDeleteModal from "./AskDeleteModal";
import SnackBar from "./SnackBar";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
      activeIndex: 0,
      messageStatus: false,
      message: ""
    };
    this.note = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.showNotes = this.showNotes.bind(this);
  }

  handleClick(e, titleProps) {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  async componentDidMount() {
    await this.props.fetchNotes();
    await console.log(this.props.notes + "dlk");
    if (typeof this.props.notes[0] === "string") {
      this.setState({
        messageStatus: true,
        message: "Something went wrong with server, please reload the page"
      });
    }
  }

  showNotes() {
    return this.props.notes.map((post, index) => {
      return (
        <div key={post.id} id={post.id} className="note-title-container">
          <Accordion.Title
            active={this.state.activeIndex === index}
            index={index}
            onClick={this.handleClick}
            className="note-title"
          >
            <Icon name="dropdown" />
            {post.title}
          </Accordion.Title>
          <Accordion.Content
            className="note-content"
            active={this.state.activeIndex === index}
          >
            <p>{post.content}</p>
          </Accordion.Content>

          <Dropdown
            className="modal-editing-trigger "
            icon="ellipsis vertical"
            style={{ cursor: "pointer" }}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                children={
                  <AskDeleteModal
                    trigger={<i className="icon trash" />}
                    icon="trash"
                    headerText="Do you want to delete this note ?"
                    ref={this.wholePost}
                    triggerDelete={this.triggerDelete}
                    noteId={post.id}
                  />
                }
              />
              <Dropdown.Item children={<i className="icon sync" />} />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <NoteCreation />
        <div className="notes-position">
          <Segment className="notes-holder" inverted>
            <Accordion inverted>{this.showNotes()}</Accordion>
          </Segment>
        </div>
        <SnackBar
          status={this.props.showError}
          messageType={"err-snackBar"}
          content={"Something went wrong with server, please reload the page"}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.existedNotes.reverse(),
  showError: state.showError };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesList);
