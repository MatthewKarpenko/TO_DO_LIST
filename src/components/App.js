import React, { Component } from "react";
import { connect } from "react-redux";

import NotesList from "./NotesList";
import SnackBar from "./SnackBar";
import UndoButton from "./UndoButton";
import "../app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UndoButton />
        <SnackBar
          status={this.props.showError}
          messageType={"err-snackBar"}
          content={"Something went wrong with server, please reload the page"}
        />

        <h1 className="app-name">List</h1>
        <div className="main-components">
          <NotesList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { showError: state.showError };
};

export default connect(
  mapStateToProps,
  {}
)(App);
