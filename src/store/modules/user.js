import { login } from "@/api/user"


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
        }
    }
}


export default user
