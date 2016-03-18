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
import Footer from './Footer.jsx';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    id: uuid.v4(),
                    title: 'MaSDKlite',
                    content: 'blog content'
                },
                {
                    id: uuid.v4(),
                    title: 'SonicWave',
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
            overflow: 'hidden',
            backgroundColor:'#41abf0'
        };

        var scrollStyle = {
            'zIndex' : '-2',
            height: '100%',
            'overflow':'auto',
            marginLeft:'20',
            paddingRight:'20',
            paddingBottom:'-100'
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
                    <NavBar list={this.state.posts}  pageChangeHandler = {this.handlePageChange}/>
                </LeftNav>
                <AppBar
                    style = {titlebar}
                    title="Alipay plus Document"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <div style={scrollStyle}>
                    <div dangerouslySetInnerHTML={ {__html: this.props.content}} />
                    <Footer/>
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
        );
        this.loadlocalHTML();
    }.bind(this);

    //use this method to load a local file with html elements
    loadlocalHTML = function(){
        console.log("load html file");
        var reader = new FileReader();

    }.bind(this);

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
