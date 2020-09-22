import { loginApi } from '../../apis/apis'
import { LOGIN } from '../Actions/UserAction'

const initState = {
    userInfo: {},
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            const { email, password, is_teacher } = action
            let data = {}
            loginApi(email, password, is_teacher).then((res) => {
                localStorage.setItem('user', res.token)
                res = data
            })
            console.log(data)
            return Object.assign({}, state, {
                userInfo: {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    is_teacher: data.is_teacher,
                    total_score: data.total_score,
                },
            })
        default:
            return state
    }
}

export { initState, reducer }
