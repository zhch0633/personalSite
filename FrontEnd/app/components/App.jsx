import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import Blog from './Blog.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        },
        {
          id: uuid.v4(),
          task: 'add a new task '
        }
      ],
      blogs: [
        {
          id: uuid.v4(),
          title: 'mock blog1',
          content: 'blog content'
        },
        {
          id: uuid.v4(),
          title: 'mock blog2',
          content:'blog content'
        }
      ]
    };


  }

  render() {
    const notes = this.state.notes;
    const blogs = this.state.blogs

    return (
      <div>
        <Blog blogs = {blogs}/>
      </div>
    );
  }
  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  };
  editNote = (id, task) => {
    const notes = this.state.notes.map(note => {
      if(note.id === id && task) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  };
}
