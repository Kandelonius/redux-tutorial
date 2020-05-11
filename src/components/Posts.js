import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import './PostStyles.css';
class Posts extends Component {
    // constructor(props) { **got rid of this after moving fetch to postActions.js
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }
    // componentDidMount() { **got rid of this after moving fetch to postActions.js
    // componentWillMount(){ **considered unsafe
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //         posts: data
    //     })); // using fetch instead of axios
    // }

    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts added</h1>
                {postItems}
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(Posts);