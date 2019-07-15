import React from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import { deleteNote, fetchNotes } from "../actions";
import SnackBar from "./SnackBar";

class AskDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      messageStatus: false,
      messageType: "",
      message: ""
    };
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote = async () => {
    await this.props.deleteNote(this.props.noteId);
    await console.log(this.props.showError);
    if (!this.props.showError) {
      this.props.fetchNotes();
      this.setState({
        showModal: false
      });
    } else {
      this.setState({
        messageStatus: true,
        messageType: "err-snackBar",
        message: "Something went wrong with server, please try again"
      });
    }
  };

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
          <SnackBar
            status={this.state.messageStatus}
            messageType={this.state.messageType}
            content={this.state.message}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { deletedNote: state.deleteNote, showError: state.showError };
};

export default connect(
  mapStateToProps,
  { deleteNote, fetchNotes }
)(AskDeleteModal);
