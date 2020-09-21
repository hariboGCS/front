import styled from 'styled-components'
import LoginPicture from './LoginPicture.png'
export const RegisterStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9eef6;
    overflow: hidden;
    .loginContainer {
        width: 1140px;
        height: 675px;
        display: flex;
        background-color: rgba(255, 255, 255, 0.5);
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
            .joinText {
                font-weight: bold;
            }
        }
        .loginRectangleBox {
            display: flex;
            flex-direction: row-reverse;
            width: 278px;
            margin: 0px auto 60px;
            .loginRectangle {
                width: 28px;
                height: 7px;
                background-color: #3f88c5;
            }
        }
        .inputBox {
            height: 36px;
            width: 305px;
            padding: 10px;
            border: solid 1px #99999a;
            border-radius: 7px;
            font-size: 20px;
            margin-bottom: 19px;
        }
        .loginBtnContent {
            margin-top: 10px;
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
