/**
 * use this component to form a blog for show in blog site
 */

import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import ListItem from 'material-ui/lib/lists/list-item';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';
import IconButton from 'material-ui/lib/icon-button';


var $ = require ('jquery');

const styles = {
    popover: {
        padding: 0,
        maxWidth: 400
    }
};


export default class BlogItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blog : props.content,
            editing: false,
            open: false,
            counter : this.props.counter,
            hovering : false,
            showingBlog : this.props.showingBlog,
            avatar:this.props.avatar
        }
    };

    render() {
        var showHover = false;
        if(this.state.blog.id){
            if(this.state.blog.id.valueOf() === this.props.showingBlog.valueOf()) {
                showHover = true;
            }
        }
        console.log(this.state.blog.id + this.props.showingBlog);

        var headerStyle ={

        };

        if(showHover) {
            return (
                    <ListItem
                        onClick={this.handleClick}
                        onMouseOver={this.onMouseOver}
                    >   <p> {this.state.blog.title} </p>
                        <Paper zDepth={1}>
                        <CardText>
                            <div dangerouslySetInnerHTML={{__html:this.state.blog.brief}}></div>
                        </CardText>
                        <CardHeader
                            title= "残相君~"
                            subtitle={this.state.blog.publishedDate}
                            avatar={this.state.avatar}
                        ><IconButton
                            iconClassName="muidocs-icon-custom-github"
                        /></CardHeader>
                        </Paper>

                    </ListItem>
            );
        } else {
            return(
                <ListItem
                    onClick={this.handleClick}
                    onMouseOver={this.onMouseOver}
                >{this.state.blog.title}
                </ListItem>
            )
        }
    }

    handleClick = () =>{
        this.props.pageChangeHandler(this.state.blog.id);
    };

    onMouseOver = (event) =>{
        this.props.hoverChangeHandler(this.state.blog.id);
    };

    handleRequestClose = () => {
        this.setState({
            open: false

        });
    };
}

