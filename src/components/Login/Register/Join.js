import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterStyle } from './S'
import useInput from '../useInput'
import { RegisterApi } from '../../../apis/apis'

function Register() {
    const [{ name, email, password }, onChange, reset] = useInput({
        name: '',
        email: '',
        password: '',
    })
    const [is_teacher, setTeacher] = useState(false)
    const handleRegister = () => {
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        const pw_regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/
        if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
            if (email.match(regExp) != null) {
                if (password.match(pw_regExp) != null) {
                    //Axios 사용해서 회원가입 연동
                    RegisterApi(name, email, password, is_teacher)
                    console.log('success')
                } else {
                    alert('비밀번호는 8 ~ 12자, 영문 숫자 조합입니다')
                    reset()
                }
            } else {
                alert('이메일의 형식이 맞지 않습니다')
                reset()
            }
        } else {
            alert('모두 입력해주십시오')
        }
    }
    const onChangeTeacher = () => {
        setTeacher(!is_teacher)
    }
    return (
        <RegisterStyle>
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
                                placeholder="성명"
                                name="name"
                                value={name}
                                onChange={onChange}
                            />
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
                                vlaue={password}
                                onChange={onChange}
                            />
                        </div>
                        <div className="loginBtnContent">
                            <button
                                className="loginBtn"
                                onClick={handleRegister}
                            >
                                회원가입
                            </button>
                        </div>
                        <div className="joinUs">
                            <span>이미 계정이 있나요?</span>
                            <Link to="/Login">
                                <span className="joinText">로그인</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </RegisterStyle>
    )
}

export default Register
