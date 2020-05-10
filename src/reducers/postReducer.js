import {FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    itmes: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}