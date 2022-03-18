import { login } from "@/api/user"
import { ACCESS_TOKEN } from "../mutation-types"


const user = {
    state: {
        token: ''
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    actions: {
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(response => {
                    const result = response.data
                    console.log(result)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        setToken({ commit }, token) {
            commit('SET_TOKEN', token)
        }
    }
}


export default user
