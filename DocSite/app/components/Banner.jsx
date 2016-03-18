/* this module class for show banner in a page ,usuall contains a picture or a color inside this banner
 * */

import React from 'react';
import CardMedia from 'material-ui/lib/card/card-media';
import CardHeader from 'material-ui/lib/card/card-header';


export default class Banner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //show a picure according to url
            picture : props.banner.picture,
            //show a color according to color string
            color : props.banner.color,

            //determine if this is a color content or a url content
            isPicture: props.banner.isPicture
        }
    };

    render() {
        //determine if is a picture or just a color
        if(this.state.isPicture == true) {
            var style = {
                left:'0',
                'minHeight':'50wv'
            };
            var imgStyle = {
                'width':"100%",
                'WebkitBackgroundSize': 'cover',
                'MozBackgroundSize': 'cover',
                'OBackgroundSize': 'cover',
                'backgroundSize': 'cover'
            };
            return (
                <div style={style}>
                    <CardMedia
                        overlay={
                        <CardHeader
                        title="User Name "
                        subtitle="user brief "
                        avatar="http://lorempixel.com/100/100/nature/"  />
                        }
                    ><img src={this.state.picture} style= {imgStyle}/></CardMedia>
                </div>
            )
        } else {
            var colorStyle = {
                height:"30%",
                wigth:"100%",
                background: this.state.color
            };
            return (
                <div style={colorStyle}></div>
            );
        }
    }
}