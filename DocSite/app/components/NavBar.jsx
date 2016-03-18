import React from 'react';
import BlogItem from './BlogItem.jsx'
import CircularProgress from 'material-ui/lib/circular-progress';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.list
        };

    }

    componentDidMount() {
        this.setState({loading:true});
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        const  data = this.state.data;
        if(data) {
            return (
                <div>
                    {data.map(post => <BlogItem key={post.id} content = {post} pageChangeHandler= {this.props.pageChangeHandler}/>)}
                </div>
            );
        } else {
            return (
                <CircularProgress/>
            )
        }
    }
}