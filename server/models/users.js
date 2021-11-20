const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

const list = [
    {
        firstName: 'John',
        lastName: 'Jackson',
        handle: '@jj',
        password: '123',
        isAdmin: true,
        emails: [
            "john@jackson.com"
        ]
    },
    {
        firstName: 'Mary',
        lastName: 'Smith',
        handle: '@ms',
        password: 'abc',
        isAdmin: true,
        emails: [
            "john@jackson.com"
        ]
    },
    {
        firstName: 'Romeo',
        lastName: 'Montague',
        handle: '@romeo',
        password: '12345',
        isAdmin: true,
        emails: [
            "romeo@montague.com"
        ]
    },
    {
        firstName: 'Juliet',
        lastName: 'Capulet',
        handle: '@juliet',
        password: '12345',
        isAdmin: true,
        emails: [
            "juliet@capulet.com"
        ]
    },
];

module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }
module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));

module.exports.Add = async function Add(user) {
    if(!user.firstName){
         return Promise.reject( { code: 422, msg: "First Name is required" } )
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
    
        console.log({
            user, salt: process.env.SALT_ROUNDS, hash
        })
        
        user.password = hash;

        const user2 = await collection.insertOne(user);
        user._id = user2.insertedId;

        return { ...user, password: undefined };
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id) }, 
        { $set: user },
        { returnDocument: 'after'}
    );
    console.log({ user_id, results });
        
    return { ...results.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(user_id) })

    return results.value;
}

module.exports.Login = async function Login(handle, password){
    console.log({ handle, password})
    const user = await collection.findOne({ handle });
    if(!user){
        return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });
    }

    const result = await bcrypt.compare(password, user.password)
        
    if( ! result ){
        throw { code: 401, msg: "Wrong Password" } ;
    }
    
    const data = { ...user, password: undefined };
    
    return { user: data };

    
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await module.exports.Add(x)
    }
}