import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from './actions';


const PostsList= () =>{

    const dispatch = useDispatch();
    const posts = useSelector((state)=>state);

useEffect(()=>{
    dispatch(fetchPosts());
}, [dispatch]);

return(
    <div>
        <h2>Posts</h2>
        {posts.loading ?(<p>loading........</p>
        ):posts.error ?(
            <p>error:{posts.error.message}</p>
        ):(
            <ul>
                {posts.data.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        )}
    </div>
);

};
export default PostsList;