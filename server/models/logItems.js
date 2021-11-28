const Users = require( "./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('logItems');
module.exports.collection = collection;

const list = [
    {
        caption: "I ran a mile",
        user_handle: "@JJ"
    },
    {
        caption: "I did 20 pushups",
        user_handle: "@ms"
    },
];

const addOwnerPipeline = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}

module.exports.GetFeed = async function (handle) {
    const user = await Users.collection.findOne({ handle });
    if(!user){
        throw { code: 404, msg: 'No such user'};
    }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     ].concat(addOwnerPipeline));
    return query.toArray();
}


module.exports.Get = function Get(logItem_id) { return collection.findOne({_id: new ObjectId(logItem_id) }); }

module.exports.Add = async function Add(logItem) {
    if(!logItem.user_handle){
        throw {code: 422, msg: "Log item must have an Owner"}
    }
    logItem.time = Date();
    
    const response = await collection.insertOne(logItem);
    
    logItem.id = response.insertedId;

    return { ...logItem };
}
module.exports.Update = async function Update(logItem_id, logItem) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(logItem_id) },
        { $set: logItem },
        { returnDocument: 'after'}
    );

    return results.value;
}
module.exports.Delete = async function Delete(logItem_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(logItem_id) })

    return results.value;
} 

module.exports.Search = q => collection.find({ caption: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}