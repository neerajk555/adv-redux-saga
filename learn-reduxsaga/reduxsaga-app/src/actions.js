export const fetchPosts = ()=>({
    type: 'FETCH_POSTS',
});

export const fetchPostsSuccess =(posts)=>({
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts,
});

export const fetchPostsFailure =(error)=>({
    type: 'FETCH_POSTS_FAILURE',
    payload: error,
});