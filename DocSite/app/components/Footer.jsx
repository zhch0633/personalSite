/* this module class for show footer in a page ,ususally be black
 * */

import React from 'react';


export default class Banner extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        //determine if is a picture or just a color
        var style = {
            left: '0',
            'height': '100',
            color:"black"
        };
        return (
            <div style={style}>
            </div>
        )

    }
}

