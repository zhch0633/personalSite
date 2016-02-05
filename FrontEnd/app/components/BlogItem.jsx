/**
 * use this component to form a blog for show in blog site
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';

var $ = require ('jquery');

export default class BlogItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false
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
        var centerStype = {
            background:"white",
            position: 'relative',
            top:'30%',
        };

        if (this.state.loading) {
            return(
                <div style={centerStype}>
                    <CircularProgress/>
                </div>
            )
        }

        centerStype.textAlign = "";
        return(
            <div style={centerStype}>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>
                <p >{JSON.stringify(this.state.data)}</p>

            </div>

        );
    }
}

