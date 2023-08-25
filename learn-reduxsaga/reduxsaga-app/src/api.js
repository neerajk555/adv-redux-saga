export const fetchPostsApi = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const posts =[
                {id:1, title:'Posts 1'},
                {id:2, title:'Posts 2'},
            ];
            resolve(posts);
        }, 1000);
    });
};