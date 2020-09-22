import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginStyle } from './S'
import useInput from '../useInput'
import { UseUserDispatch, UseUserState } from '../../../Context/Context'
import { loginHandler } from '../../../Redux/Actions/UserAction'

const Login = ({ history }) => {
    const [{ email, password }, onChange, reset] = useInput({
        email: '',
        password: '',
    })
    const [is_teacher, setTeacher] = useState(false)
    const dispatch = UseUserDispatch()
    const state = UseUserState()
    const handleLogin = () => {
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        const pw_regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/
        if (email.match(regExp) != null) {
            if (password.match(pw_regExp) != null) {
                //Axios 사용해서 로그인 연동
                dispatch(loginHandler(email, password, is_teacher))
                console.log('state' + state)
                history.push('/DashBoard')
                reset()
            } else {
                alert('비밀번호는 8 ~ 12자, 영문 숫자 조합입니다')
                reset()
            }
        } else {
            alert('이메일의 형식이 맞지 않습니다')
            reset()
        }
    }
    const onChangeTeacher = () => {
        setTeacher(!is_teacher)
    }
    return (
        <LoginStyle>
            <div className="loginContainer">
                <div className="left">
                    <div className="leftContent">
                        <div className="topText">
                            <span className="loginText">로그인</span>
                            <span className="joinText">회원가입</span>
                        </div>
                        <div className="loginRectangleBox">
                            <div className="loginRectangle"></div>
                        </div>
                        <div
                            onClick={onChangeTeacher}
                            className={`teacherWrapper ${
                                is_teacher && 'teacher'
                            }`}
                        >
                            {is_teacher ? '선생님' : '학생'}
                        </div>
                        <div className="inputContent">
                            <input
                                className="inputBox"
                                placeholder="이메일"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                            <input
                                type="password"
                                className="inputBox"
                                placeholder="비밀번호"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                            <div className="checkContent">
                                <input type="checkbox" id="checkBox" />
                                <span>로그인 상태 유지</span>
                            </div>
                        </div>
                        <div className="loginBtnContent">
                            <button className="loginBtn" onClick={handleLogin}>
                                로그인
                            </button>
                        </div>
                        <div className="joinUs">
                            <span>아직 계정이 없나요?</span>
                            <Link to="/Register">
                                <span className="joinText">회원가입</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </LoginStyle>
    )
}

export default Login
