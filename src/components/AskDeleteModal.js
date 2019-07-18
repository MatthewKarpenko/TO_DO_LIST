import React from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import {
  deleteNote,
  fetchNotes,
  askToUndo,
  closeUndo,
  sendUndoResponse
} from "../actions";




class AskDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.timer = null
    this.sendResponseBack = dispatch => {
      dispatch({ type: "UNDO_RESPONSE", payload: false });
    }
  }
  
  deleteNote = () => {
    this.props.askToUndo();

    this.setState({
      showModal: false
    });
 
    document.getElementById(`${this.props.noteId}`)
    .classList.add('hidden');

    this.timer = setTimeout(async () => {
       await this.props.deleteNote(this.props.noteId);
       this.props.closeUndo();
       this.props.sendUndoResponse(false);
    },2000)

  };

componentDidUpdate() {
  if (this.props.undoResponse) {
    this.props.closeUndo();
    this.props.sendUndoResponse(false);
    document.getElementById(`${this.props.noteId}`)
    .classList.remove("hidden");
    clearTimeout(this.timer);
  }
}  



  render() {
    
    return (
      <div>
        <Modal
          trigger={
            <i
              className="icon trash"
              onClick={() => {
                this.setState({ showModal: true });
              }}
            />
          }
          basic
          size="small"
          style={{ margin: "auto" }}
          open={this.state.showModal}
        >
          <Header icon={this.props.icon} content={this.props.headerText} />

          <Modal.Actions>
            <Button
              basic
              color="red"
              onClick={() => {
                this.setState({ showModal: false });
              }}
              inverted
            >
              <Icon name="remove" /> No
            </Button>
            <Button
              onClick={this.deleteNote}
              color="blue"
              style={{ color: "white" }}
              inverted
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletedNote: state.deleteNote,
    showError: state.showError,
    undoResponse: state.sendUndoResponse
    // undo: state.undo
  };
};

export default connect(
  mapStateToProps,
  { deleteNote, fetchNotes, askToUndo, closeUndo, sendUndoResponse }
)(AskDeleteModal);
