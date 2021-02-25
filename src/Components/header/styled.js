import styled from 'styled-components';

export const Header = styled.div `

    background-color: #1d1d1d;    
    
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 5px 2px 2px rgb(0, 0, 0, 0.2);
        display: grid;
        grid-template-columns: 15% 77%;
        padding: 10px 0px 0px 0px;

        .user-menu {
            background-color: gold;
            border-radius: 100%;
            width: 50px;
            height: 50px;
            margin-left: 19px;

            .user-icon {
                width: 49px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    width: 32px;
                    height: 29px;
                    color: #1d1d1d;
                }
            }

            .user-bar {
                position: absolute;
                top: 45px;
                left: 50px;
                background: #fff;
                border-radius: 100%;
                padding: 3px 2px 2px 2px;
                width: 27px;
                height: 27px;

                svg {
                    width: 14px;
                    height: 21px;
                    margin: 0;
                    color: #1d1d1d;
                    display: none
                }
            }
        }

        .address-box {
            text-align: center;
            color: #fff;
            padding: 4px 0;
            text-align: left;

            svg{
                float: right;
                margin: 0 20px;
            }
            
            p{
                text-align: left;
                line-height: 24px;
                font-size: 14px;
            }

            .address {
                color: #ed8931;
                display: inline;

                svg {
                    width: 25px;
                    height: 25px;
                    color: #fff
                }
            }
        }        
    }
`