import { GetByHandle } from "./users";

const list = [
    {
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "@jj",
        isPublic: true,
    },
    {
        caption: "Lorem Ipsom",
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
} 