import { api } from "./myFetch";



export function GetAll() {
    return api('posts');
}

export function GetWall(handle) {
    return api('posts/wall/' + handle);
}

export function GetFeed(handle) { 
    return api('posts/feed/' + handle);   
}

export function Get(post_id) { return api('posts/' + post_id); }

export function Add(post) {
     return api('posts', post);
}
export function Update(post_id, post) {
    return { post_id, post};
}
export function Delete(post_id) {
    return api('posts/' + post_id, {}, 'DELETE');
} 

/*import { GetByHandle } from "./users";

const list = [
    {
        src: "https://s7d2.scene7.com/is/image/TWCNews/brooklyn-gym-generic-file-covidjpg",
        alt: "A picture of a gym",
        caption: "A picture of a gym",
        time: Date(),
        user_handle: "@jj",
        isPublic: true
    },
    {
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "@jj",
        isPublic: true,
    },
    {
        caption: "Dolor Sit",
        time: Date(),
        user_handle: "@ms",
        isPublic: true,
    },
];

const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

export function GetAll() {
    return listWithOwner();
}

export function GetWall(handle) {
    return listWithOwner().filter(post=> post.user_handle == handle);
}

export function GetFeed(handle) { return listWithOwner()
    .filter(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) );     }


export function Get(post_id) { return list[post_id]; }
export function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
     list.push(post);
     return { ...post };
}
export function Update(post_id, post) {
    const oldObj = list[post_id];
    const newObj = { ...oldObj, ...post }
    list[post_id] = newObj ;
    return newObj;
}
export function Delete(post_id) {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
}*/