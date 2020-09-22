import axios from 'axios'

/**
 *  HandleLogin 
 * {
  "username":"junwoo",
  "email":"junwoo@gmail.com",
  "password":"a@%2g26&$3",
  "logged_in":true,
  "is_teacher":true,
  "total_score":0,
  "token":"",
}
 * 
 * 
 * 
 */
export const RegisterApi = async (username, email, password, is_teacher) => {
    console.log(username, email, password, is_teacher)
    await axios
        .post('/signup', {
            username: username,
            email: email,
            password: password,
            is_teacher: is_teacher,
        })
        .then((res) => {
            if (res.data.result === 'already exist') {
                alert(res.data.result)
                return false
            } else {
                console.log(res.data)
                return res.data
            }
        })
        .catch((err) => console.log(err))
}

export const loginApi = async (email, password, is_teacher) => {
    return await axios
        .post('/signin', {
            email: email,
            password: password,
            is_teacher: is_teacher,
        })
        .then((res) => {
            console.log(res.data.result)
            if (res.data.result === 'Invalid password') {
                alert(res.data.result)
                return false
            } else {
                console.log(res.data)
                return res.data
            }
        })
        .catch((err) => console.log(err))
}
