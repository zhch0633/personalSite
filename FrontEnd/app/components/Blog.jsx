/**
 * use this component to form a blog for show in blog site
 *
 */

import React from 'react';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            blogs: props.blogs
        };
    }

    render() {
        return (
            <ul className="blogs">{this.state.blogs.map(function(blog){
                return <li className="blog" key= {blog.id}>
                    <p>{blog.title}</p>
                    <p>{blog.content}</p>
                </li>
                }
                )}</ul>
        );
    }
}

