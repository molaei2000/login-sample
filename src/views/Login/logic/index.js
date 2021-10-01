import axios from 'axios'
import {AUTH_ERROR,AUTH_SUCCESS} from './types'
export default {
    state: {
        token: '',
        status: '',
        loading: false,
        user: {}
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    mutations: {
        [AUTH_SUCCESS](state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        [AUTH_ERROR](state) {
            state.status = 'error'
        },
    },
    actions: {
        submitLogin({
            commit,
            state
        }, payload) {
            axios.post('url/login', payload).then(resp => {
                console.log(resp)
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit(AUTH_SUCCESS, token, user)
            }).catch(err => {
                console.log(err);
                commit(AUTH_ERROR)
                localStorage.removeItem('token')
                state.loading = false
            }).finally(() => {
                state.loading = false
            })
        }
    }
}