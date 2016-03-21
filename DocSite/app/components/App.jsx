import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Blog from'./Blog.jsx'
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

var $ = require ('jquery');

/**this is a block to show a blog with a bannar
 */

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            url :url
        }
    };

    componentDidMount() {
        this.setState({loading:true});
        $.getJSON({
            url: this.state.url + "api/blogs",
            useDefaultXhrHeader: false,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    loading:false,
                    data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({
                    loading:false,
                    data: "fail"
                });
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        var appBarStyle = {
            position:"fixed",
            top:0
        };

        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap = {this.handleClickNavBar}
                    style = {appBarStyle}
                />
                <LeftNav
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </LeftNav>
                <Blog/>
            </div>
        )
    }

    handleClickNavBar = () =>{
        //touggle the nav bar for display navigation
        this.setState({
            open: true
        });
    }
}
