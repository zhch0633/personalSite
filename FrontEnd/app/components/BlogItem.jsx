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
            hovering: false,
            open: false
        }
    };

    render() {

        //if(this.state.hovering){
        var hoverStyle = {
            zIndex : "-25"
        };

        //if(this.state.hovering){
        //    return (<ListItem
        //        onMouseOver={this.handleMouseOver}
        //        onMouseOut={this.handleMouseOut}
        //    >Click me</ListItem>);
        //} else {
            return (
                <ListItem
                    onClick={this.handleClick}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                >{this.state.blog.title}
                    <Popover
                        open={this.state.hovering}
                        anchorEl={this.state.anchorEl}
                        useLayerForClickAway={false}
                        animated = {false}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                    >
                        <div style={styles.popover}>
                            <Card>
                                <CardHeader
                                    title="URL Avatar"
                                    subtitle="Subtitle"
                                    avatar="http://lorempixel.com/100/100/nature/"
                                />
                                <CardText>
                                    <div dangerouslySetInnerHTML={{__html:this.state.blog.brief}}></div>
                                </CardText>
                                <CardText>
                                    <div dangerouslySetInnerHTML={{__html:this.state.blog.time}}></div>
                                </CardText>
                            </Card>
                        </div>
                    </Popover>
                </ListItem>
            );
        //}
        //} else {
        //    return (
        //        <div
        //            className="hoverBlogBrief"
        //            onMouseOver={this.handleMouseOver.bind(this)}
        //            onMouseOut={this.handleMouseOut.bind(this)}
        //        >
        //            <ListItem>
        //                {this.state.blog.title}
        //            </ListItem>
        //        </div>
        //    );
        //}
    }

    handleClick = () =>{
        this.props.pageChangeHandler(this.state.blog.id);
    };


    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    handleMouseOver = (event) => {
        this.setState({
            hovering: true,
            anchorEl: event.currentTarget
        });
    };

    handleMouseOut  = (event) => {
        this.setState({
            hovering: false,
            anchorEl: event.currentTarget
        });
    };
}

