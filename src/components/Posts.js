import React, { Component } from 'react'
import './PostStyles.css';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        // componentWillMount(){ **considered unsafe
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            })); // usind fetch instead of axios
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

export default Posts;