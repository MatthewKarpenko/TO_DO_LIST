import React, { Component } from "react";
import { Message, Transition } from "semantic-ui-react";

class ErrorSnackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility () {
    this.setState(prevState => ({ visible: !prevState.visible }));
    setTimeout(() => {
         this.setState(prevState => ({ visible: !prevState.visible }));
    },3000)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status) {
    this.toggleVisibility();    }
  }

  render() {
    const { visible } = this.state
    return (
      <Transition visible={visible} animation="fade down" duration={400}>
        <Message
          className={`${this.props.messageType} snackBar`}
          // header={this.props.content}
          // content={<i className="icon x icon" />}
        >
          {this.props.content}
          <i onClick={this.toggleVisibility} className="closeMessageIcon icon x icon" />
        </Message>
      </Transition>
    );
  }
}

export default ErrorSnackBar;
