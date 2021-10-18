import { GetByHandle } from "./users";

const list = [
    {
        user_handle: "@ms",
        Monday: "Lorem",
        Tuesday: "ipsum",
        Wednesday: "dolor",
        Thursday: "sit",
        Friday: "amet"
    },
];

const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

export function GetWall(handle) {
    return listWithOwner().filter(weekSchedule=> weekSchedule.user_handle == handle);
}

export function Get(weekSchedule_id) { return list[weekSchedule_id]; }