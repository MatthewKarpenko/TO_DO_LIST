import React, { Component } from 'react';
import { connect } from "react-redux";
import { Transition } from 'semantic-ui-react';

import { sendUndoResponse } from '../actions'

class UndoButton extends Component {
    

    render() {
        
        return (
          <Transition
            visible={this.props.undo}
            animation="scale"
            duration={500}
            
          >
            <div
              className="undoButton"
              onClick={() => {this.props.sendUndoResponse(true)
            }}
            >
              <i className="icon undo alternate" />
              Undo
            </div>
          </Transition>
        );
    }
}

const mapStateToProps = state => {
  return { 
    undo: state.askToUndo
  };
};

export default connect(
  mapStateToProps,
  { sendUndoResponse }
)(UndoButton);