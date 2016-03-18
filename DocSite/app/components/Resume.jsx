import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar : "http://lorempixel.com/100/100/nature/",
            background : "http://lorempixel.com/600/337/nature/",
            blogTitle: "用react搞定解耦博客站",
            blogSubTitle:"To handle blog site with react trick"
        }
    };

    render() {

        var backGroundStyle = {
            'background-color' : "yellow"
        };

        var style = {
            maxWidth:'1000',
            margin: 'auto',
            position: 'absolute',
            top: 0, left: 0,bottom: 0, right: 0};

        return (
            <div style= {backGroundStyle}>
                <Card style={style}>
                    <CardHeader
                        title="残相君"
                        subtitle="有时候比较宅"
                        avatar= {this.state.avatar}
                    >
                        <FlatButton label="Primary" primary={true} />
                        <FlatButton label="Secondary" secondary={true} />
                        <FlatButton label="Disabled" disabled={true} />
                    </CardHeader>
                    <CardMedia
                        overlay={<CardTitle title= {this.state.blogTitle} subtitle={this.state.blogSubTitle} />}
                    >
                        <img src= {this.state.background} />
                    </CardMedia>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <h2>
                        this is pata 2
                    </h2>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
