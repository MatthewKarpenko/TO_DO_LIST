import React, { Component } from "react";
import { Header, Modal } from "semantic-ui-react";

export default class NoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false });
  }
  componentDidMount() {
    console.log(this.props.trigger);
  }
  render() {
    return (
      <Modal
        onClose={this.closeModal}
        open={this.state.showModal}
        trigger={
          <i
            onClick={() => this.setState({ showModal: true })}
            className="icon ellipsis vertical modal-editing-trigger"
          />
        }
        closeIcon
        style={{ margin: "auto" }}
      >
        <Header icon="paper plane outline" content="Создать пост" />

        <Modal.Content>
          <div className="ui form">
            <h4 className="ui dividing header">Что у вас нового ?</h4>
            <div className="field">
              <label>Текст</label>
              <textarea
              // ref={this.textForNewPost}
              // onChange={this.textAreaPost}
              />
            </div>
          </div>
        </Modal.Content>

        <div className="actions">
          <div className="ui button">Cancel</div>
          <div className="ui positive button">Update</div>
        </div>
      </Modal>
    );
  }
}
