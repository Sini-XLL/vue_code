import Cookie from 'js-cookie';
// import { Login } from '@/api/login';
// import { GetInfo,UpdateInfo,GetMerchantInfo,updateMerchant, GetUsers } from '@/api/users';
import { getNickName, getToken, getUserName, removeToKen, removeUserName, setToKen, setUserName } from '@/utils/app';
const state = {
    // 单一的数据类型
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,//优先取浏览器里的值
    // isCollapse:JSON.parse(localStorage.getItem('isCollapse')) || false,//长期存储
    // isCollapse:Cookie.get('isCollapse') || false,//长期存储
    // JSON.parse()//字符串转对象
    // count:10
    // to_Ken: getToken() || '',
    // username: getUserName() || '',
    // nickname:getNickName()||'',
}
const getters = {
    isCollapse: state => state.isCollapse,
    username: state => state.username
}
const mutations = {
    // 同步函数
    // 提交更改数据，使用store.commit方法更改state存储的状态
    // 专注于修改State，理论上是修改State的唯一途径
    SET_isCollapse(state) {
        state.isCollapse = !state.isCollapse
        // 触发点击后HTML5本地存储 存储的值必须是字符串类型 浏览器关闭时候清除 临时性的东西
        // window.sessionStorage.setItem("isCollapse",JSON.stringify(state.isCollapse)) 
        // window.localStorage.setItem("isCollapse",JSON.stringify(state.isCollapse))//长期存储，自己清除或者设置清除
        // Cookie
        Cookie.set('isCollapse', JSON.stringify(state.isCollapse)) //用于请求头携带cookie
    },
    // 当退出清除cookie时也要讲state里面的token清空
    // SET_TOKEN(state, value) {
    //     state.to_Ken = value

    // },
    // SET_USERNAME(state, value) {
    //     state.username = value

    // },


}
const actions = {



}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};