import styled from 'styled-components';
import Lupa from '../../Assets/icon-busca.png';

export const Begin = styled.section `
    .search-box{
        margin-top: -1px;
        .box {
            background: #1d1d1d;
            padding: 5px 0 0px 0;
            &.fixed {
                position: fixed; 
                width: 100%;
                z-index: 9;
                top: 0;   
                box-shadow: inset 0 0 0.7em #d3d3d3;
            }

            input {
                background-image: url(${Lupa});                
                background-position: 95% center;
                background-repeat: no-repeat;
                text-align: left;
                margin: 17px 0;
                border: none;
                border-radius: 8px;    
            }
        }
        input {
            margin-top: 0px;
            width: 92%;
            padding: 12px;            
        }
    }    

    h2 {
        font-size: 20px;
        color: #ed8931;
        margin-bottom: 20px;
        display: block;
        border-bottom: 1px dotted;
        text-align: left;
        width: 89%;
        margin: 18px auto;
        padding: 10px 0;
    }

    .stores-box {
        min-height: 630px;
        display: block;
    }

    .store {        
        border-radius: 8px;
        display: flex;
        margin: 3%;
        padding: 3%;
        align-items: center;
        
        .store-left {
            background-color: #f1f1f1;
            width: 20%;
            border-radius: 100%;
            margin-right: 7%;


            img {
                width: 75px;
                height: 75px;
            }
        }

        .store-middle {
            width: 60%;

            .store-middle-top{
                display: flex;
                p{
                    display: flex;
                    font-size: 13px;
                }
            }
            .store-middle-bottom{
                display: flex;
                p{
                    display: flex;
                    font-size: 12px;
                    &.status  {
                        color: #00FF00;
                    }                  
                }
            }
            
            p {                
                color: 	#808080;
                text-align: left;
                margin: 5px 2px 2px 0;
                span {
                    color: #9ACD32;
                }

                svg {
                    color: #FFD700;   
                    margin: 0 4px 0 0;                
                }
            }
        }

        .store-right {
            width: 20%;

            button {
                background: transparent;
                border: none;
                cursor: pointer;
                svg {
                    color:#ed8931;
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }

    
`