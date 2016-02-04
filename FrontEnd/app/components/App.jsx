import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import Blog from './Blog.jsx';
import AppBar from 'material-ui/lib/app-bar';
import Banner from './Banner.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      ],

      //for show the banner for content
      banner : {
        isPicture : true,
        picture: "http://images6.fanpop.com/image/photos/34800000/HATSUNE-MIKU-miku-hatsune-34845278-1280-800.jpg"
      }
    };


  }

  render() {
    const notes = this.state.notes;
    const blogs = this.state.blogs;

    var centerStype = {
       height : "100%",
       padding:  '0px 0px 0px 0px',
       overflow: 'hidden'
  };

    var titlebar = {
       position: 'absolute',
       top:'0px',
       left: '0px',
       width: '100%',
       overflow: 'hidden'
  };

    var testStyle = {
       height: '100%',
      'overflow':'auto'
    };

    return (
      <div style = {centerStype}>
        <AppBar
            style = {titlebar}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div style={testStyle}>
          <Blog url="http://localhost:3001/api/blogs"/>
          <Banner banner = {this.state.banner}/>
        </div>
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
