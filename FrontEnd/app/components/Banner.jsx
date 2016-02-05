/* this module class for show banner in a page ,usuall contains a picture or a color inside this banner
 * */

import React from 'react';

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
                position: 'absolute',
                top:'60',
                left:'0',
                'margin-top':"60dp",
                width:"100%",
                height:'40%',
                'min-height':'50wv'
            };
            var imgStyle = {
                'width':"100%",
                '-webkit-background-size': 'cover',
                '-moz-background-size': 'cover',
                ' -o-background-size': 'cover',
                'background-size': 'cover'
            };
            return (
                <div style={style}>
                    <img src={this.state.picture} style= {imgStyle}/>
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