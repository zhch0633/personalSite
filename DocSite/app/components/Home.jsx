import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import ImgHost from './ImgHost.jsx';

/**this is a block to show a blog with a bannar
 */

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar : this.props.avatar,
            background : "http://pic.qiantucdn.com/58pic/11/25/25/46j58PICKMh.jpg",
            blogTitle: "用react搞定解耦博客站",
            blogSubTitle:"To handle blog site with react trick"
        }
    };

    render() {
        var backGroundStyle = {
            paddingTop:'80',
            paddingLeft:10,
            paddingRight:10,
            paddingBottom : '20'
        };

        var bodyStyle = {
            maxWidth:'1000',
            margin: 'auto',
            top: 0, left: 0,bottom: 0, right: 0};

        var pictureStyle = {
            clip:'rect(0px,50px,200px,0px)'
        };

        var cardHeaderStyle = {
            marginBottom : '20'
        };

        return (
            <div style={backGroundStyle}>
                <Card style={bodyStyle}>
                    <CardHeader
                        title="残相君"
                        subtitle="有时候比较宅"
                        avatar={this.state.avatar}
                    >
                        <FlatButton label="回到首页" primary={true} style={cardHeaderStyle}/>
                        <FlatButton label="勾搭钦定" secondary={true} style={cardHeaderStyle}/>
                        <FlatButton label="批判一番" disabled={true} style={cardHeaderStyle}/>
                    </CardHeader>
                    <CardMedia
                        overlay={<CardTitle title= {"技术有点萌"} subtitle={"看番,看漫,搞绘画~代码,设计,程序员"} />}
                    >
                        <ImgHost src={this.state.background}/>
                    </CardMedia>
                    <p>首页工程中</p>
                </Card>
            </div>
        )
    }
}
