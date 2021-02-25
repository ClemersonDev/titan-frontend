import styled from 'styled-components';

export const Sidebar = styled.div `
    >div{
        button#react-burger-menu-btn {
            height: 65px!important;
            display: block;
            width: 58px!important;
            left: -38px!important;
            top: -43px!important;
        }
    }
    #App {
        font-family: sans-serif;

        /* Give app full page to work with */
        height: 100vh;
    }
    
    #page-wrap {
        text-align: center;

        /* Prevent sidebar from showing a scrollbar on page */
        overflow: auto;
    }

    /* Individual item */
    .bm-item {
        display: inline-block;

        /* Our sidebar item styling */
        text-decoration: none;
        margin-bottom: 10px;
        color: #000000;
        font-size: 20px;
        transition: color 0.2s;        
    }

    .bm-menu-wrap{
        /* width: 100% !important; */
    }
    .bm-item.menu-item-personal {
        margin: 44px 0 20px 0;
        display: grid!important;        
        align-items: center;
        justify-content: center;
        .menu-item-foto {
            background: gold;
            height: 70px;
            border-radius: 84%;
            width: 70px;
            margin: auto;
            display: grid;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 2px rgb(0 0 0 / 50%);
            svg {
                width: 39px;
                height: 41px;
            }

            #edit-icon {
                width: 25px;
                height: 25px;
                position: absolute;
                top: 42px;
                left: 228px;
                color: #b8b7ad;
            }
        }
        .menu-item-dados {
            font-size: 14px;
            .menu-item-nome{
                margin-top: 15px;
                font-weight: bold;
                display: block;
            }
            span{
                display: block;
                margin: 5px 0;

            }
        }
    }

    /* Change color on hover */
    .bm-item:hover {
        /* color: rgba(177, 167, 167, 0.589); */
    }

    /* The rest copied directly from react-burger-menu docs */

    /* Position and sizing of burger button */
    .bm-burger-button {
        position: absolute;
        width: 36px;
        height: 30px;
        left: 30px;
        top: 16px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #373a47;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: #bdc3c7;
    }

    /* General sidebar styles */
    .bm-menu {
        background: #fff;
        font-size: 1.15em;
    }

    #menu-link {
        text-decoration: none;
        text-align: left;
        display: flex;
        align-items: center;

        span {
            font-size: 14px;
        }
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #fff;

        .menu-nav {
            display: grid !important;

            .menu-nav-box {
                display: flex;
                padding: 10px 0 10px 15px;
                margin-bottom: 3px;

                a {
                    color: #1d1d1d;

                    svg {
                        width: 20px;
                        height: 20px;
                        color: #b8b7ad;
                        margin-right: 10px;
                    }
                }
            }            
        }
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    @media(max-width: 2000px) {
        .bm-burger-button {
            top: 52px;
            left: 55px;
            width: 30px;
            height: 24px;
           span{
                &:nth-child(1){
                    height: 13% !important; 
                    width: 56%;
                }
                &:nth-child(2){                    
                    height: 13% !important; 
                    width: 56%;
                    top: 23% !important;
                }
                &:nth-child(3){
                    height: 13% !important; 
                    width: 56%;
                    top: 51% !important;
                }
           }
        }
    }
`