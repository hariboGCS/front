import React from 'react'
import { Link } from 'react-router-dom'
import { LoginStyle } from './S'
import useInput from '../useInput'

const Login = () => {
    const [{ email, password }, onChange, reset] = useInput({
        email: '',
        password: '',
    })
    const handleLogin = () => {
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        var pw_regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
        if (email.test(regExp) != null) {
            if (password.test(pw_regExp) != null) {
                //Axios 사용해서 로그인 연동
                console.log('success')
            } else {
                alert('비밀번호는 8 ~ 10자, 영문 숫자 조합입니다')
                reset()
            }
        } else {
            alert('이메일의 형식이 맞지 않습니다')
            reset()
        }
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
                                <sapn className="joinText">회원가입</sapn>
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
