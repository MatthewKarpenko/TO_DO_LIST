import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchNotes } from '../actions';


class NotesList extends Component {
    componentDidMount() {
        this.props.fetchNotes()
        // axios
        //   .get("http://159.89.96.181/api/v1/notes",{headers})
        //   .then(function(response) {
        //     // handle success
        //     console.log(response);
        //   })
        //   .catch(function(error) {
        //     // handle error
        //     console.log(error);
        //   });

        //   axios
        //   .post('http://159.89.96.181/api/v1/tokens', {
        //     userName: 'Matthew'
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    renderList() {
        console.log(this.props.notes)
        return (
            this.props.notes.map((notes) => {
                return (
                  <div className="item" key={notes.id}>
                    <div className="right flotated content">
                      {/* <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(notes)}>
                                Select
                            </button> */}
                      {notes.title}
                    </div>
                    <div className="content">
                      {notes.content}
                    </div>
                  </div>
                );
            })
        )
    }
    render() {
        return (
            <div>{this.renderList()}</div>
        );
    }
}

const mapStateToProps = state => {
  return { notes: state.existedNotes };
};

export default connect(mapStateToProps, { fetchNotes })(NotesList)