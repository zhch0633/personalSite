import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import Blog from './Blog.jsx';
import AppBar from 'material-ui/lib/app-bar';
import Banner from './Banner.jsx';
import NavBar from './NavBar.jsx';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import CircularProgress from 'material-ui/lib/circular-progress';


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
          content: 'blog content'
        }
      ],

      //for show the banner for content
      banner: {
        isPicture: true,
        picture: "http://images6.fanpop.com/image/photos/34800000/HATSUNE-MIKU-miku-hatsune-34845278-1280-800.jpg"
      },

      window: {width: $(window).width(), height: $(window).height()},

      //now showing blog's id
      blogID: "home",
      navOpen : true
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  };

  render() {
    const notes = this.state.notes;
    const blogs = this.state.blogs;

    var centerStype = {
       height : "100%",
       padding:  '0px 0px 0px 0px',
       overflow: 'hidden'
  };

    var titlebar = {
       top:'0px',
       left: '0px',
       width: '100%',
       overflow: 'hidden'
  };

    var scrollStyle = {
      'zIndex' : '-2',
      height: '100%',
      'overflow':'auto'
    };

    var navBarStyle = {
      'zIndex' : '1',
      'paddingTop':'60'
    };

    if(this.state.navOpen){
      scrollStyle.paddingLeft = "260"
    }

    return (
      <div style = {centerStype}>
        <LeftNav open={this.state.navOpen} style = {navBarStyle} width = {260}>
          <NavBar url="http://localhost:3001/api/blogs"  pageChangeHandler = {this.handlePageChange}/>
        </LeftNav>
        <AppBar
            style = {titlebar}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div style={scrollStyle}>
          <Banner banner = {this.state.banner}/>
          <Blog url="http://localhost:3001/api/blogs"/>
        </div>function
      </div>
    );
  }

  handlePageChange =  function(id){
    console.log("jump page");
    this.setState(
        {
          blogID: id
        }
    )
  }.bind(this);

  //TODO this is the point for bind this function on this context om ES6
  updateDimensions = function(){
    var windowSize = {width: $(window).width(), height: $(window).height()};
    var navBarOpen = false;
    navBarOpen = windowSize.width > 500;
    this.setState({
        window : windowSize,
        navOpen : navBarOpen
    });
  }.bind(this);
}
