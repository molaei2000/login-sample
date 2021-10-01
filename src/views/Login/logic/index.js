import axios from 'axios'

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
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
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
                commit('auth_success', token, user)
            }).catch(err => {
                console.log(err);
                commit('auth_error')
                localStorage.removeItem('token')
                state.loading = false
            }).finally(() => {
                state.loading = false
            })
        }
    }
}