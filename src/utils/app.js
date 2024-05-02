// 
import cookie from 'js-cookie';
const adminToKen="token"
const usernameKey="username"
const nicknameKey="nickname"
export function getToken(){
    return cookie.get(adminToKen)
}
export function setToKen(toKen){
    return cookie.set(adminToKen,toKen)
}
export function removeToKen(){
    return cookie.remove(adminToKen)
}
export function setUserName(value){
    return cookie.set(usernameKey,value)
}
export function getUserName(){
    return cookie.get(usernameKey)
}
export function removeUserName(){
    return cookie.remove(usernameKey)
}
export function getNickName(){
    return cookie.get(nicknameKey)
}
export function removeNickName(){
    return cookie.remove(nicknameKey)
}
export function setNickName(value){
    return cookie.set(nicknameKey,value)
}