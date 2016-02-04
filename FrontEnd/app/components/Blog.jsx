/**
 * use this component to form a blog for show in blog site
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';


var $ = require ('jquery');

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

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
        if (this.state.loading) {
            return <span>Loading...</span>;
        }

        return (
        <RaisedButton label="Default" />

//        <p>{JSON.stringify(this.state.data)}</p>
        );
    }
}

