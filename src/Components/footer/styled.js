import styled from 'styled-components';

export const Footer = styled.div`
    text-align: center;
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #f1f1f1;
    display: flex;
    border-top: 1px solid #DFE0DF;

    .footer-box {
        background-color: #fff;
        width: 25%;
        height: 60px;
        display: block;
        align-items: center;
        justify-content: center;
        padding-top: 7px;

        a {
            text-decoration: none;
            svg {
                width: 25px;
                height: 25px;
                color: #E76A30;
            }
            p {
                color: #b8b7ad;
            }

        }
    }   
`