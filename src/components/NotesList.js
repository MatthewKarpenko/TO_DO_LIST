import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Icon, Segment, Dropdown } from "semantic-ui-react";

import { fetchNotes } from "../actions";
import AskDeleteModal from './AskDeleteModal';
import SnackBar from "./SnackBar";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
      activeIndex: 0,
      messageStatus: false,
      message: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e, titleProps) {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  async componentDidMount() {
     await this.props.fetchNotes();
     if(typeof this.props.notes !== 'string'){
      this.setState({ notesArr: this.props.notes.reverse().slice(1) });
      
     }else {
       this.setState({
         messageStatus: true,
         message: 'Something went wrong with server, please reload the page'
        })
     }
  }


  render() {
    const { activeIndex } = this.state;
    return (
      <div className="notes-position">
        <Segment className="notes-holder" inverted>
          <Accordion inverted>
            {this.state.notesArr.map((post, index) => {
              return (
                <div key={post.id} className="note-title-container">
                  <Accordion.Title
                    active={activeIndex === index}
                    index={index}
                    onClick={this.handleClick}
                    className='note-title'
                  >
                    <Icon name="dropdown" />
                    {post.title}
                  </Accordion.Title>
                  <Accordion.Content className="note-content" active={activeIndex === index}>
                    <p>{post.content}</p>
                  </Accordion.Content>

                  <Dropdown
                    className="modal-editing-trigger "
                    icon="ellipsis vertical"
                    style={{ cursor: "pointer" }}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item
                        children={
                          <AskDeleteModal
                            trigger={<i className='icon trash'></i>}
                            icon='trash'
                            headerText="Вы действительно хотите удалить пост ?"
                            extraInfo="(Восстановление поста будет возможно только с помощью администратора)"
                            ref={this.wholePost}
                            triggerDelete={this.triggerDelete}
                            noteId={post.id}
                          />
                        }
                      />
                      <Dropdown.Item  children={ <i className='icon sync'></i>}/>
                     
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              );
            })}
          </Accordion>
        </Segment>
        <SnackBar 
        status={this.state.messageStatus} 
        messageType={'err-snackBar'}
        content={this.state.message}
        />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { notes: state.existedNotes };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesList);
