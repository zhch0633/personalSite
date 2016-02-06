import React from 'react';
import BlogItem from './BlogItem.jsx'
import CircularProgress from 'material-ui/lib/circular-progress';


var $ = require ('jquery');

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false
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

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        const  data = this.state.data;
        if(data) {
            return (
                <div>
                    {data.map(blog => <BlogItem key={blog.id} content = {blog} pageChangeHandler= {this.props.pageChangeHandler}/>)}
                </div>
            );
        } else {
            return (
                <CircularProgress/>
            )
        }
    }
}