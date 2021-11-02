const { GetByHandle } = require( "./users");

const list = [
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
]


const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

module.exports.GetAll = function GetAll() {
    return listWithOwner();
}

module.exports.GetWall = function GetWall(handle) {
    return listWithOwner().filter(post=> post.user_handle == handle);
}

module.exports.GetFeed = function GetFeed(handle) { return listWithOwner()
    .filter(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) );     }


module.exports.Get = function Get(post_id) { return list[post_id]; }

module.exports.Add = function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    
    list.push(post);
    
    post.id = list.length;

    return { ...post };
}
module.exports.Update = function Update(post_id, post) {
    const oldObj = list[post_id];
    const newObj = { ...oldObj, ...post }
    list[post_id] = newObj ;
    return newObj;
}
module.exports.Delete = function Delete(post_id) {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
} 

module.exports.Search = q => list.filter(x => x.caption.includes(q));