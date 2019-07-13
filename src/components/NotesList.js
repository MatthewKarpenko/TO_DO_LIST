import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Icon, Segment, Dropdown } from "semantic-ui-react";

import { fetchNotes } from "../actions";
import NoteModal from './NoteModal';
import AskDeleteModal from './AskDeleteModal';

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
      activeIndex: 0
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
    this.props.fetchNotes().then(response => {
      this.setState({ notesArr: response.payload });
    });
  }

  // renderList(arr) {
  //   const newArr = [];
  //   arr.map(notes => {
  //     newArr.unshift(
  //       <div key={notes.id} className='note-title-container'>
  //         <p>{notes.title}</p>
  //       </div>
  //     );
  //   });
  //   this.setState({ notesArr: newArr });
  // }

  render() {
    const { activeIndex } = this.state;
    return (
      <Segment className='notes-holder' inverted>
        <Accordion inverted>
         { this.state.notesArr.map((post, index) => {
         return (
           <div key={post.id} className="note-title-container">
             <Accordion.Title
               active={activeIndex === index}
               index={index}
               onClick={this.handleClick}
             >
               <Icon name="dropdown" />
               {post.title}
             </Accordion.Title>
             <Accordion.Content active={activeIndex === index}>
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
                       trigger={<p>Удалить</p>}
                       icon="trash"
                       headerText="Вы действительно хотите удалить пост ?"
                       extraInfo="(Восстановление поста будет возможно только с помощью администратора)"
                       ref={this.wholePost}
                       triggerDelete={this.triggerDelete}
                     />
                   }
                 />
               </Dropdown.Menu>
             </Dropdown>
           </div>
         );})}
        </Accordion>
      </Segment>
    );
  }
}

{/* <div className="notes-holder">{this.state.notesArr.map(note => note)}</div>; */}

const mapStateToProps = state => {
  return { notes: state.existedNotes };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesList);
