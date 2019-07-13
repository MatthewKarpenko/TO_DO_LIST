import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Modal, Transition } from "semantic-ui-react";
import { postNote } from "../actions";

class NoteCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      showModal: false,
      isOpen: false,
      visible: false
    };
    this.getTitle = React.createRef();
    this.getContent = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textTitle = this.textTitle.bind(this);
    this.textContent = this.textContent.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clearNewPost = this.clearNewPost.bind(this);
    this.firstLetterUpperCase = this.firstLetterUpperCase.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility () {
    this.setState(prevState => ({ visible: !prevState.visible }));
}

  closeModal() {
    this.setState({ showModal: false });
  }

  clearNewPost() {
    this.setState({
      showModal: false,
      title: "",
      content: "",
      errorMessage: "",
      errorVisibility: false
    });
  }

  textTitle() {
    this.setState({ title: this.getTitle.current.value });
  }
  textContent() {
    this.setState({ content: this.getContent.current.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "" && this.state.content !== "") {
      const title = this.state.title;
      const content = this.state.content;
      const data = {
        title,
        content
      };
      this.props.postNote({ type: "POST_NOTE", payload: data });
      this.setState({ title: "", content: "", showModal: false });
    } else {
      this.setState({
        errorMessage: "*Please fill content and title"
      });
      this.toggleVisibility();
      setTimeout(() => {
        this.toggleVisibility()
      }, 2000);
    }
  };

  firstLetterUpperCase(e) {
    if (e.target.value.length > 0) {
      let name = e.target.name;
      let wordArray = e.target.value.split("");
      let firstLetter = wordArray[0].toUpperCase();
      wordArray.splice(0, 1);
      wordArray.unshift(firstLetter);
      let upperArray = wordArray.join("");
      e.target.value = upperArray;

      this.setState({
        [name]: upperArray
      });
    }
  }

  render() {
    const { visible, errorMessage,showModal } = this.state;
    return (
      <div>
        <Modal
          onClose={this.closeModal}
          open={showModal}
          trigger={
            <div className="note-creation-holder">
              <i
                className="plus circle icon big modal-creationPost-trigger"
                onClick={() => this.setState({ showModal: true })}
              />
            </div>
          }
          closeIcon
          style={{ margin: "auto" }}
        >
          <Header icon="paper plane outline" content="Add new note" />

          <Modal.Content>
            <div className="content">
              <div className="ui form">
                <h4 className="ui dividing header">Track your tasks</h4>

                <div className="field">
                  <label>Title</label>
                  <textarea
                    className="title-textarea"
                    ref={this.getTitle}
                    value={this.state.title}
                    onChange={this.textTitle}
                    onBlur={this.firstLetterUpperCase}
                    name="title"
                  />
                </div>
                <div className="field">
                  <label>Content</label>
                  <textarea
                    ref={this.getContent}
                    value={this.state.content}
                    onChange={this.textContent}
                  />
                </div>
              </div>
            </div>
          </Modal.Content>
          <Transition visible={visible} animation="scale" duration={300}>
            <p className="error">
              {errorMessage}
            </p>
          </Transition>
          <div className="actions">
            <div className="ui button" onClick={this.clearNewPost}>
              Cancel
            </div>
            <div className="ui positive button" onClick={this.handleSubmit}>
              Add
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { createdNotes: state.createdNotes };
};

export default connect(
  mapStateToProps,
  { postNote }
)(NoteCreation);
