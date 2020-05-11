import { FETCH_POSTS, NEW_POST } from '../actions/types';

export const fetchPosts = () => dispatch => {
    // console.log('fetching');
    // return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })); // using fetch instead of axios
    // }
}
