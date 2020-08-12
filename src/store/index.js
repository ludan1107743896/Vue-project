import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: 'zhangsan',
        age: '18',
        count: 10
    },
    mutations: {
        showPeople(state, msg) {
            state.name = msg;
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
        handleClickBtn() {

        },
        decrementAction(context, {payload}){
            console.log(payload, '--------payload-----')
            console.log(context, '-------context------')
            // context.commit('decrement');
        }
    }
})

// const templateA = {
//     state: {

//     },
//     mutations: {
//         decrement(state) {
//             state.count--
//         }
//     },
//     actions: {
//         decrementAction(context){
//             context.commit('decrement');
//         }
//     }
// }
// 多个入口 modules 时
// new Vuex.Store({
//     modules: {
//         templateA,
//         templateB
//     }
// })

export default store;