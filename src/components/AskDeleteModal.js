import React from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";

// const AskDeleteModal = React.forwardRef((props, ref) => {
//   const state = {
//     showModal: false
//   }

//   closeModal = () => this.setState({ showModal: false });

//         return (
//           <Modal
//             trigger={
//               <p onClick={this.setState({ showModal: true })}>
//                 Удалить
//               </p>
//             }
//             basic
//             size="small"
//             style={{ margin: "auto" }}
//             open={this.state.showModal}
//           >
//             <Header icon={props.icon} content={props.headerText} />
//             <Modal.Content>
//               <p>{props.extraInfo}</p>
//             </Modal.Content>
//             <Modal.Actions>
//               <Button basic color="red" inverted>
//                 <Icon name="remove" /> Нет
//               </Button>
//               <Button
//                 onClick={() => {
//                   this.setState({ showModal: true });
//                   ref.current.remove();
//                 }}
//                 color="blue"
//                 style={{ color: "white" }}
//                 inverted
//               >
//                 <Icon name="checkmark" /> Да
//               </Button>
//             </Modal.Actions>
//           </Modal>
//         );

// })

class AskDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  render() {
    return (
      <Modal
        trigger={
          <p
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            Удалить
          </p>
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
          <Button basic color="red" inverted>
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

export default AskDeleteModal;
