export const LOGIN = 'user/LOGIN'
export const REGISTER = 'user/REGISTER'

export const loginHandler = (email, password, is_teacher) => {
    return {
        type: LOGIN,
        email,
        password,
        is_teacher,
    }
}

export const registerHandler = (data) => {
    return {
        type: REGISTER,
        data,
    }
}
