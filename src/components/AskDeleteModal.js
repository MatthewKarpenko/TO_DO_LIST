import React from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteNote } from '../actions'


class AskDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  render() {
    return (
      <Modal
        trigger={
          <i className='icon trash'
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
        <Modal.Content>
          <p>{this.props.extraInfo}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="red"
            onClick={() => {
              this.setState({ showModal: false });
            }}
            inverted
          >
            <Icon name="remove" /> Нет
          </Button>
          <Button
            onClick={() => {
              this.setState({ showModal: false });
            }}
            color="blue"
            style={{ color: "white" }}
            inverted
          >
            <Icon name="checkmark" /> Да
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}



export default connect(null,{deleteNote})(AskDeleteModal)


