import styled from 'styled-components'
import LoginPicture from './LoginPicture.png'

export const LoginStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9eef6;
    .loginContainer {
        width: 1140px;
        height: 675px;
        display: flex;
        background-color: rgba(255, 255, 255, 0.5);
        overflow: hidden;
    }
    .left {
        height: 675px;
        width: 570px;
        display: flex;
        justify-content: center;
        align-items: center;
        .leftContent {
            width: 327px;
            height: 440px;
        }
        .topText {
            width: 327px;
            display: flex;
            justify-content: space-around;
            font-size: 36px;
            color: rgba(11, 11, 12, 0.5);
            .loginText {
                font-weight: bold;
            }
        }
        .loginRectangleBox {
            display: flex;
            width: 278px;
            margin: 0px auto 60px;
            .loginRectangle {
                width: 28px;
                height: 7px;
                background-color: #3f88c5;
            }
        }
        .teacherWrapper {
            width: 90px;
            height: 30px;
            margin: 10px;
            padding-top: 6px;
            border-radius: 10px;
            background-color: #99999a;
            text-align: center;
            font-weight: 500;
            color: white;
        }
        .teacher {
            background-color: #3f88c5;
            color: white;
        }
        .inputBox {
            height: 36px;
            width: 305px;
            padding: 10px;
            border: solid 1px #99999a;
            border-radius: 7px;
            font-size: 20px;
            margin-bottom: 24px;
        }
        .checkContent {
            margin-bottom: 30px;
            #checkBox {
                margin-right: 7px;
            }
        }
        .loginBtnContent {
            margin-bottom: 24px;
            .loginBtn {
                height: 61px;
                width: 325px;
                border: 0;
                border-radius: 7px;
                background: #3f88c5;
                font-size: 24px;
                color: #ffffff;
            }
        }
        .joinUs {
            width: 280px;
            display: flex;
            justify-content: space-around;
            margin: 0 auto;
            font-size: 20px;
            .joinText {
                font-weight: bold;
                color: #3f88c5;
            }
        }
    }
    .right {
        height: 675px;
        width: 570px;
        background-image: url(${LoginPicture});
        background-color: #ffffff;
    }
`
