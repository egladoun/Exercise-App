import { api } from "./myFetch";

export function GetAll() {
    return api('logItems');
}

export function GetWall(handle) {
    return api('logItems/wall/' + handle);
}

export function GetFeed(handle) { 
    return api('logItems/feed/' + handle);   
}

export function Get(logItems_id) { return api('logItems/' + logItems_id); }

export function Add(logItems) {
    return api('logItems', logItems);
}

export function Update(logItems_id, logItems) {
    return api('logItems/' + logItems_id, logItems, 'PATCH');
}
export function Delete(logItems_id) {
    return api('logItems/' + logItems_id, {}, 'DELETE');
}