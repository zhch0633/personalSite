/**
 * use this component to form a blog for show in blog site
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';

export default class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }
    };

    componentDidMount() {
        this.setState({loading:true});
    }

    render() {
        var centerStype = {
            background:"white",
            position: 'relative'
        };

        if (this.state.loading) {
            return(
                <div style={centerStype}>
                    <p >{JSON.stringify(this.state.data)}</p>
                </div>
            )
        }

        centerStype.textAlign = "";
        return(
            <div style={centerStype}>
                <iframe src="included.html"></iframe>
                <p >{JSON.stringify(this.state.data)}</p>
            </div>
        );
    }
}

