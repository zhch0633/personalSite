import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import ImgHost from './ImgHost.jsx';

import BlogItem from './BlogItem.jsx'
import CircularProgress from 'material-ui/lib/circular-progress';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import randomColor from './utils/randomColor.jsx';
import Avatar from 'material-ui/lib/avatar';


/**this is a block to show a blog with a bannar
 */

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar : this.props.avatar,
            background : "http://pic.qiantucdn.com/58pic/11/25/25/46j58PICKMh.jpg",
            blogTitle: "用react搞定解耦博客站",
            blogSubTitle:"To handle blog site with react trick",
            data : false
        }
    };

    componentDidMount() {
        this.setState({loading:true});
        $.getJSON({
            url: this.props.url,
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
        const data = this.state.data;

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                paddingTop: '0',
                paddingBottom: '20'
            },
            gridList: {
                width: "100%",
                height: 800,
                overflowY: 'auto',
                marginBottom: 24,
                background : "white"
            }
        };

        var divStyle = {
            background :randomColor.generate()
        };

        var bannerStyle = {
            width :"100%",
            top:50
        };
        var avatarStyle = {
            position: "absolute",
            left: 0,
            top: 0,
            right:0,
            bottom:0,
            margin: "auto"
        };
        var containerStyle = {
            width: '100%',
            height: '0',
            'paddingBottom': '30%',
            overflow: 'hidden'
        };

        var imgStyle = {
            width: '100%'
        };

        if (data) {
            return (
                <div style={styles.root}>
                    <div style={bannerStyle}>
                        <CardMedia
                            overlay={
                            <CardTitle title="blog 首页" subtitle="身经百战,见招拆招 ~ 谈笑风生,毕竟too young ,欢迎小伙伴骚扰" />
                            }
                        ><ImgHost src="/pic/Material-design.jpg" height="50%"/>
                            <div style ={avatarStyle}>
                                <Avatar style ={avatarStyle} src={this.state.avatar} size = '120'/>
                            </div>
                        </CardMedia>
                    </div>
                    <GridList
                        cols={2}
                        cellHeight={200}
                        padding={1}
                        style={styles.gridList}
                    >
                        {this.state.data.map(blog => (
                            <div style={divStyle}> 首页工程中,从菜单进吧~ </div>
                        ))}
                    </GridList>
                </div>
            );
        } else {
            return (
                <CircularProgress/>
            )
        }
    }
}
